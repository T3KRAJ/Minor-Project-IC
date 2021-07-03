from django.urls import path
from core.api import UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'api', UserViewSet, basename='api')
urlpatterns = router.urls
