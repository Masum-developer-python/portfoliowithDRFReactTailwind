# urls.py
from django.urls import path
from . import views

app_name = 'iot'

urlpatterns = [
    path('', views.project_list, name='project_list'),
    path('project/new/', views.project_create, name='project_create'),
    path('project/<int:pk>/', views.project_detail, name='project_detail'),
    path('project/<int:pk>/edit/', views.project_edit, name='project_edit'),
    path('project/<int:project_pk>/client-component/add/', views.client_component_add, name='client_component_add'),
    path('project/<int:project_pk>/required-component/add/', views.required_component_add, name='required_component_add'),
    path('client-component/<int:pk>/edit/', views.client_component_edit, name='client_component_edit'),
    path('required-component/<int:pk>/edit/', views.required_component_edit, name='required_component_edit'),
    path('client-component/<int:pk>/delete/', views.client_component_delete, name='client_component_delete'),
    path('required-component/<int:pk>/delete/', views.required_component_delete, name='required_component_delete'),
    path('required-components/summary/', views.required_components_summary, name='required_components_summary'),
    
]