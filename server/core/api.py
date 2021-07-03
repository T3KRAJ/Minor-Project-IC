  
from core.serializers import ImageSerializer
from rest_framework import viewsets
from core.models import Image

class UserViewSet(viewsets.ModelViewSet):

    serializer_class = ImageSerializer
    queryset = Image.objects.all()
