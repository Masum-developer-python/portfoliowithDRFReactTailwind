from django.urls import path,include
from .views import ArabicAlphabetListCreateView,ArabicWordViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'arabic-words', ArabicWordViewSet)  # ArabicWord এর জন্য API URL


urlpatterns = [
    path('', include(router.urls)),  # সব Router URL ইন্টারফেসে যোগ করা
    path('arabic-alphabets/', ArabicAlphabetListCreateView.as_view(), name='arabic-alphabet-list-create'),
]
