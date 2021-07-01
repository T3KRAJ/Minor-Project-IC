  
from core.serializers import ImageSerializer
from rest_framework import viewsets

class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = ImageSerializer
    queryset = Image.objects.all()
