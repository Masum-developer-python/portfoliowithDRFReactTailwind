from django.urls import path
from . import views

urlpatterns = [
    path('family_tree/<int:person_id>/', views.family_tree, name='family_tree'),
    path('<int:person_id>/', views.get_family_tree_data,name='')
]
