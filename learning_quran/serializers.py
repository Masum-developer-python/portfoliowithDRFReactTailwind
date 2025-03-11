from rest_framework import serializers
from .models import ArabicAlphabet, ArabicWord

class ArabicAlphabetSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArabicAlphabet
        fields = ['id','alphabet', 'alphabet_name']
        
        
class ArabicWordSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArabicWord
        fields = "__all__"