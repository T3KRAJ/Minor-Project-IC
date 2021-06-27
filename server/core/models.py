from django.db import models

# Create your models here.
class Image(models.Model):
    picture = models.ImageField()
    result = models.CharField(max_length=100, blank=True)
    uploaded_on = models.DateTimeField(auto_now_add=True)

