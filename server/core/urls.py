from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from django.views.decorators.csrf import csrf_exempt
from core.api import *

urlpatterns = [
    path('api/images/', ImageList.as_view()),
    path('api/image/create/', CreateImage.as_view()),
    path('api/image/<int:image_id>', GetImageById.as_view()),
    path('api/image/delete/<int:id>', ImageDelete.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)