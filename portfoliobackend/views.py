from django.shortcuts import render
from django.views.generic import ListView, CreateView, UpdateView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from django.urls import reverse_lazy
# views.py
from django.views.generic import ListView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.db.models import Sum
from django.db.models.functions import TruncMonth
from django.urls import reverse_lazy
from django.utils import timezone
from django.db import models
from decimal import Decimal
# Create your views here.

from rest_framework import viewsets
from .models import Project, Skill, Experience, Category, Transaction
from .serializers import ProjectSerializer, SkillSerializer, ExperienceSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer

class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all().order_by('category', '-proficiency')
    serializer_class = SkillSerializer

class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all().order_by('-start_date')
    serializer_class = ExperienceSerializer


def learninglist(req):
    return render(req,'learninglist.html')



class TransactionListView(LoginRequiredMixin, ListView):
    model = Transaction
    template_name = 'finances/transaction_list.html'
    context_object_name = 'transactions'
    paginate_by = 20

    def get_queryset(self):
        queryset = Transaction.objects.filter(user=self.request.user)
        
        # Filter by date range if provided
        start_date = self.request.GET.get('start_date')
        end_date = self.request.GET.get('end_date')
        if start_date and end_date:
            queryset = queryset.filter(date__range=[start_date, end_date])
            
        # Filter by category if provided
        category = self.request.GET.get('category')
        if category:
            queryset = queryset.filter(category_id=category)
            
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        queryset = self.get_queryset()
        
        # Calculate totals
        income_total = queryset.filter(
            category__type='income'
        ).aggregate(total=Sum('amount'))['total'] or Decimal('0')
        
        expense_total = queryset.filter(
            category__type='expense'
        ).aggregate(total=Sum('amount'))['total'] or Decimal('0')
        
        # Monthly breakdown
        monthly_summary = queryset.annotate(
            month=TruncMonth('date')
        ).values('month').annotate(
            income=Sum('amount', filter=models.Q(category__type='income')),
            expenses=Sum('amount', filter=models.Q(category__type='expense'))
        ).order_by('-month')

        context.update({
            'income_total': income_total,
            'expense_total': expense_total,
            'balance': income_total - expense_total,
            'monthly_summary': monthly_summary,
            'categories': Category.objects.filter(user=self.request.user)
        })
        return context

class TransactionCreateView(LoginRequiredMixin, CreateView):
    model = Transaction
    fields = ['date', 'category', 'amount', 'description', 'payment_method']
    template_name = 'finances/transaction_form.html'
    success_url = reverse_lazy('transaction-list')

    def form_valid(self, form):
        form.instance.user = self.request.user
        return super().form_valid(form)

    def get_form(self, form_class=None):
        form = super().get_form(form_class)
        form.fields['category'].queryset = Category.objects.filter(user=self.request.user)
        return form
    
# views.py
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.db.models import Sum
from django.contrib import messages
from .models import Transaction, Category
from .forms import TransactionForm
from datetime import datetime, timedelta

@login_required
def dashboard(request):
    # Get date range from query parameters or default to current month
    end_date = datetime.now().date()
    start_date = end_date.replace(day=1)
    
    # Get transactions for the period
    transactions = Transaction.objects.filter(
        user=request.user,
        date__range=[start_date, end_date]
    )
    
    # Calculate totals
    total_income = transactions.filter(type='income').aggregate(Sum('amount'))['amount__sum'] or 0
    total_expenses = transactions.filter(type='expense').aggregate(Sum('amount'))['amount__sum'] or 0
    net_amount = total_income - total_expenses
    
    context = {
        'transactions': transactions,
        'total_income': total_income,
        'total_expenses': total_expenses,
        'net_amount': net_amount,
        'start_date': start_date,
        'end_date': end_date,
    }
    return render(request, 'money_tracker/dashboard.html', context)

@login_required
def add_transaction(request):
    if request.method == 'POST':
        form = TransactionForm(request.POST)
        if form.is_valid():
            transaction = form.save(commit=False)
            transaction.user = request.user
            transaction.save()
            messages.success(request, 'Transaction added successfully!')
            return redirect('dashboard')
    else:
        form = TransactionForm()
    
    return render(request, 'money_tracker/add_transaction.html', {'form': form})

@login_required
def transaction_list(request):
    transactions = Transaction.objects.filter(user=request.user)
    return render(request, 'money_tracker/transaction_list.html', {'transactions': transactions})


def read_class_links_from_file(file_path):
    class_links = {}
    current_class = None
    current_links = []
    
    with open(file_path, 'r') as file:
        for line in file:
            line = line.strip()
            print(line)
            if not line:  # Skip empty lines
                continue
            
            if line.endswith(':'):  # Check if it's a class title
                if current_class:  # Save previous class links if any
                    class_links[current_class] = current_links
                current_class = line[:-1]  # Remove the ':' from the class name
                current_links = []  # Reset the list of links
                print(current_class)
                # print(current_links)
            else:
                current_links.append(line)  # Add the link to the current class
                # print(current_links)
        # Add the last class to the dictionary
        print(current_class)
        if current_class:
            class_links[current_class] = current_links
            print(class_links[current_class])
        print(class_links)
            
    return class_links

def class_links_view(request):
    file_path = '/home/rmn30654/Desktop/portfolio/portfoliobackend/classlink.txt'  # Specify the correct path to your file
    class_links = read_class_links_from_file(file_path)
    
    return render(request, 'class_links.html', {"class_links": class_links})
