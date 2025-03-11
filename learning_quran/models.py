from django.db import models

# Create your models here.


class ArabicAlphabet(models.Model):
    alphabet = models.CharField(max_length=2)
    alphabet_name = models.CharField(max_length=10, blank=True)
    
    def __str__(self):
        return f"{self.alphabet} - {self.alphabet_name}"
    
    
class ArabicWord(models.Model):
    diacritics = models.CharField(max_length=32, blank=True, default="")
    letter = models.ForeignKey(ArabicAlphabet, on_delete=models.CASCADE)
    position = models.CharField(max_length=32, blank=True, default="")
    word = models.CharField(max_length=32, blank=True, default="")
    bangla = models.CharField(max_length=32, blank=True, default="")
    english = models.CharField(max_length=32, blank=True, default="")
    parts_of_speech = models.CharField(max_length=5, blank=True, default="")
    
    class Meta:
        unique_together = ('diacritics', 'letter', 'position')  # Enforces uniqueness across these fields
    
    def __str__(self):
        return f"{self.word}"