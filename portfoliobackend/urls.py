from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import *
router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'experiences', ExperienceViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('class', class_links_view, name='class_links'),
    path('todo',learninglist),
    path('d', views.dashboard, name='dashboard'),
    path('add/', views.add_transaction, name='add_transaction'),
    path('transactions/', views.transaction_list, name='transaction_list'),
    # path('transactions/', TransactionListView.as_view(), name='transaction-list'),
    # path('transactions/add/', TransactionCreateView.as_view(), name='transaction-add'),
    
]
