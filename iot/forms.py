# forms.py
from django import forms
from .models import Project, ClientComponent, RequiredComponent

class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ['name', 'client_name', 'start_date', 'target_completion', 'total_budget', 'customer_given_tk']
        widgets = {
            'start_date': forms.DateInput(attrs={'type': 'date'}),
            'target_completion': forms.DateInput(attrs={'type': 'date'})
        }

class ClientComponentForm(forms.ModelForm):
    class Meta:
        model = ClientComponent
        fields = [ 'name', 'quantity', 
                 'condition', ]

class RequiredComponentForm(forms.ModelForm):
    class Meta:
        model = RequiredComponent
        fields = ['name','quantity', 'unit_cost',
                  'supplier', 'status']