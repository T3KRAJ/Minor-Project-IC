from rest_framework import serializers
from core.models import Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'
    
    def create(self, validated_data):
        return Image.objects.create(**validated_data)