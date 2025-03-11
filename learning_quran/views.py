
from rest_framework.response import Response
from rest_framework import generics, status, viewsets
from .models import ArabicAlphabet, ArabicWord
from .serializers import ArabicAlphabetSerializer, ArabicWordSerializer

class ArabicAlphabetListCreateView(generics.ListCreateAPIView):
    queryset = ArabicAlphabet.objects.all()
    serializer_class = ArabicAlphabetSerializer

    def create(self, request, *args, **kwargs):
        print("Received Data:", request.data)  # Debugging
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print("Errors:", serializer.errors)  # Log errors
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ArabicWordViewSet(viewsets.ModelViewSet):
    queryset = ArabicWord.objects.all()  # সব ArabicWord দেখাবে
    serializer_class = ArabicWordSerializer