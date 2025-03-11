# admin.py
from django.contrib import admin
from .models import Project, ClientComponent, RequiredComponent

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('name', 'client_name', 'start_date', 
                    'total_budget','customer_given_tk','budget_used', 
                    'budget_remaining','get_customer_remaining_payment',
                    'payment_status')
    search_fields = ('name', 'client_name')
    list_filter = ('start_date', 'target_completion')

@admin.register(ClientComponent)
class ClientComponentAdmin(admin.ModelAdmin):
    list_display = ( 'name', 'project', 'quantity', 'condition')
    list_filter = ('condition', 'project')
    search_fields = ( 'name', 'specifications')

@admin.register(RequiredComponent)
class RequiredComponentAdmin(admin.ModelAdmin):
    list_display = ( 'name', 'project', 'quantity', 'unit_cost', 'total_cost', 'status')
    list_filter = ('status', 'project')
    search_fields = ( 'name', 'specifications')
