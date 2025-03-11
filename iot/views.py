# views.py
from django.shortcuts import render, get_object_or_404, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.db import models
from .models import Project, ClientComponent, RequiredComponent
from .forms import ProjectForm, ClientComponentForm, RequiredComponentForm

@login_required
def project_list(request):
    projects = Project.objects.all().order_by('target_completion','start_date','-total_budget','-customer_given_tk')
    totals = Project.get_total_budgets()
    
    context = {
        'projects': projects,
        'total_budget': totals['total_budget_sum'] or 0,
        'total_given': totals['total_given_sum'] or 0,
        'total_remaining': Project.get_total_remaining(),
    }
    return render(request, 'iot/project_list.html', context)

@login_required
def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    client_components = project.clientcomponent_set.all()
    required_components = project.requiredcomponent_set.all().order_by('status')
    total_installed_cost = RequiredComponent.objects.filter(status='installed', project=pk).aggregate(
            total_installed_cost=models.Sum(models.F('quantity') * models.F('unit_cost'))
        )['total_installed_cost'] or 0
    
    context = {
        'project': project,
        'client_components': client_components,
        'required_components': required_components,
        'customer_remaining': project.get_customer_remaining_payment(),
        'payment_status': project.payment_status(),
        'total_installed_cost' : total_installed_cost ,
    }
    return render(request, 'iot/project_detail.html', context)

@login_required
def project_create(request):
    if request.method == "POST":
        form = ProjectForm(request.POST)
        if form.is_valid():
            project = form.save()
            messages.success(request, 'Project created successfully.')
            return redirect('iot:project_detail', pk=project.pk)
    else:
        form = ProjectForm()
    return render(request, 'iot/project_form.html', {'form': form})

@login_required
def project_edit(request, pk):
    project = get_object_or_404(Project, pk=pk)
    if request.method == "POST":
        form = ProjectForm(request.POST, instance=project)
        if form.is_valid():
            project = form.save()
            messages.success(request, 'Project updated successfully.')
            return redirect('iot:project_detail', pk=project.pk)
    else:
        form = ProjectForm(instance=project)
    return render(request, 'iot/project_form.html', {'form': form})

@login_required
def client_component_add(request, project_pk):
    project = get_object_or_404(Project, pk=project_pk)
    if request.method == "POST":
        form = ClientComponentForm(request.POST)
        if form.is_valid():
            component = form.save(commit=False)
            component.project = project
            component.save()
            messages.success(request, 'Client component added successfully.')
            return redirect('iot:project_detail', pk=project_pk)
    else:
        form = ClientComponentForm()
    return render(request, 'iot/component_form.html', {
        'form': form,
        'project': project,
        'component_type': 'Client'
    })

@login_required
def required_component_add(request, project_pk):
    project = get_object_or_404(Project, pk=project_pk)
    if request.method == "POST":
        form = RequiredComponentForm(request.POST)
        if form.is_valid():
            component = form.save(commit=False)
            component.project = project
            component.save()
            messages.success(request, 'Required component added successfully.')
            return redirect('iot:project_detail', pk=project_pk)
    else:
        form = RequiredComponentForm()
    return render(request, 'iot/component_form.html', {
        'form': form,
        'project': project,
        'component_type': 'Required'
    })

@login_required
def client_component_edit(request, pk):
    component = get_object_or_404(ClientComponent, pk=pk)
    if request.method == "POST":
        form = ClientComponentForm(request.POST, instance=component)
        if form.is_valid():
            component = form.save()
            messages.success(request, 'Client component updated successfully.')
            return redirect('iot:project_detail', pk=component.project.pk)
    else:
        form = ClientComponentForm(instance=component)
    return render(request, 'iot/component_form.html', {
        'form': form,
        'project': component.project,
        'component_type': 'Client'
    })

@login_required
def required_component_edit(request, pk):
    component = get_object_or_404(RequiredComponent, pk=pk)
    if request.method == "POST":
        form = RequiredComponentForm(request.POST, instance=component)
        if form.is_valid():
            component = form.save()
            messages.success(request, 'Required component updated successfully.')
            return redirect('iot:project_detail', pk=component.project.pk)
    else:
        form = RequiredComponentForm(instance=component)
    return render(request, 'iot/component_form.html', {
        'form': form,
        'project': component.project,
        'component_type': 'Required'
    })
@login_required
def client_component_delete(request, pk):
    component = get_object_or_404(ClientComponent, pk=pk)
    project_pk = component.project.pk
    if request.method == "POST":
        component.delete()
        messages.success(request, 'Client component deleted successfully.')
        return redirect('iot:project_detail', pk=project_pk)
    return render(request, 'iot/component_confirm_delete.html', {
        'component': component,
        'component_type': 'Client'
    })

@login_required
def required_component_delete(request, pk):
    component = get_object_or_404(RequiredComponent, pk=pk)
    project_pk = component.project.pk
    if request.method == "POST":
        component.delete()
        messages.success(request, 'Required component deleted successfully.')
        return redirect('iot:project_detail', pk=project_pk)
    return render(request, 'iot/component_confirm_delete.html', {
        'component': component,
        'component_type': 'Required'
    })


def required_components_summary(request):
    # Get all components
    components = RequiredComponent.objects.all().order_by('name')
    
    # Get overall summary
    summary = RequiredComponent.get_component_summary()
    
    # Get status-wise summary
    status_summary = RequiredComponent.get_status_summary()
    # Get status-wise summary excluding installed
    # status_summary = RequiredComponent.objects.exclude(
    #     status='installed'
    # ).values('status').annotate(
    #     count=models.Count('id'),
    #     total_quantity=models.Sum('quantity'),
    #     total_cost=models.Sum(models.F('quantity') * models.F('unit_cost'))
    # ).order_by('status')
    
    # Get components grouped by name
    components_by_name = RequiredComponent.objects.values('name','status','supplier').annotate(
        total_quantity=models.Sum('quantity'),
        total_cost=models.Sum(models.F('quantity') * models.F('unit_cost')),
        projects_count=models.Count('project', distinct=True)
    ).order_by('status','supplier')
    
    # # Get components by status with details
    components_by_status = RequiredComponent.objects.select_related('project').annotate(
        cost=models.F('quantity') * models.F('unit_cost'),
        project_name=models.F('project__name')
    ).order_by('status', 'project').values(
        'status',
        'name',
        'quantity',
        'cost',
        'project_name'
    )
    
    # Get components by status with details, excluding installed components
    # components_by_status = RequiredComponent.objects.exclude(
    #     status='installed'
    # ).select_related('project').annotate(
    #     cost=models.F('quantity') * models.F('unit_cost'),
    #     project_name=models.F('project__name')
    # ).order_by('status', 'name').values(
    #     'status',
    #     'name',
    #     'quantity',
    #     'cost',
    #     'project_name'
    # )
    # Get suppliers summary
    suppliers_summary = RequiredComponent.objects.exclude(
        status='pending'
    ).values('supplier').annotate(
        components_count=models.Count('id'),
        total_quantity=models.Sum('quantity'),
        total_cost=models.Sum(models.F('quantity') * models.F('unit_cost')),
        
    ).exclude(
        supplier__isnull=True
    ).order_by('supplier')

    context = {
        'components': components,
        'summary': summary,
        'status_summary': status_summary,
        'components_by_name': components_by_name,
        'components_by_status': components_by_status,
        'suppliers_summary': suppliers_summary,  # Add to context
    }
    return render(request, 'iot/required_components_summary.html', context)
