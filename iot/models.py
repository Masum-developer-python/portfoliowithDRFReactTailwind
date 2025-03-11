# models.py
from django.db import models
from django.core.validators import MinValueValidator
from django.contrib.auth.models import User

class Project(models.Model):
    name = models.CharField(max_length=200)
    client_name = models.CharField(max_length=200)
    start_date = models.DateField()
    target_completion = models.DateField()
    total_budget = models.DecimalField(
        max_digits=10, 
        decimal_places=2,
        validators=[MinValueValidator(0)]
    )
    customer_given_tk = models.DecimalField(  # New field
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)],
        default=0
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def budget_used(self):
        return sum(comp.total_cost for comp in self.requiredcomponent_set.all())
    
    def budget_remaining(self):
        return self.customer_given_tk - self.budget_used()

    def get_customer_remaining_payment(self):
        """Calculate how much more needs to be received from customer"""
        return self.total_budget - self.customer_given_tk
    
    def payment_status(self):
        """Returns a string indicating the payment status"""
        remaining = self.get_customer_remaining_payment()
        if remaining <= 0:
            return "Fully Paid"
        elif self.customer_given_tk > 0:
            return f"Partially Paid (Remaining: {remaining})"
        return "No Payment"

    @classmethod
    def get_total_budgets(cls):
        return cls.objects.aggregate(
            total_budget_sum=models.Sum('total_budget'),
            total_given_sum=models.Sum('customer_given_tk'),
        )
    
    @classmethod
    def get_total_remaining(cls):
        totals = cls.get_total_budgets()
        if totals['total_budget_sum'] and totals['total_given_sum']:
            return totals['total_budget_sum'] - totals['total_given_sum']
        return 0
    
    def __str__(self):
        return self.name

# class ComponentCategory(models.Model):
#     name = models.CharField(max_length=100)
#     description = models.TextField(blank=True)
#     parent = models.ForeignKey(
#         'self', 
#         null=True, 
#         blank=True, 
#         on_delete=models.SET_NULL,
#         related_name='subcategories'
#     )

#     def __str__(self):
#         return self.name

class ClientComponent(models.Model):
    CONDITION_CHOICES = [
        ('new', 'New'),
        ('used', 'Used'),
        ('damaged', 'Damaged'),
        ('repair', 'Needs Repair')
    ]
    
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    quantity = models.PositiveIntegerField()
    condition = models.CharField(max_length=20, choices=CONDITION_CHOICES)
    notes = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.component_id} - {self.name}"

class RequiredComponent(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('ordered', 'Ordered'),
        ('received', 'Received'),
        ('installed', 'Installed')
    ]
    
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    quantity = models.PositiveIntegerField()
    unit_cost = models.DecimalField(max_digits=10, decimal_places=2)
    supplier = models.CharField(max_length=200)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    
    @property
    def total_cost(self):
        return self.quantity * self.unit_cost
    
    @classmethod
    def get_component_summary(cls):
        return cls.objects.aggregate(
            total_components=models.Count('id'),
            total_cost=models.Sum(models.F('quantity') * models.F('unit_cost')),
            total_quantity=models.Sum('quantity')
        )

    @classmethod
    def get_status_summary(cls):
        return cls.objects.values('status').annotate(
            count=models.Count('id'),
            total_cost=models.Sum(models.F('quantity') * models.F('unit_cost')),
            total_quantity=models.Sum('quantity')
        )
    @classmethod
    def get_installed_components_total_cost(cls,pk):
        return cls.objects.filter(status='installed',pk=pk).aggregate(
            total_installed_cost=models.Sum(models.F('quantity') * models.F('unit_cost'))
        )
         
    def __str__(self):
        return f"{self.component_id} - {self.name}"
