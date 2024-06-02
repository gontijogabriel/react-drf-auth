from django.urls import path
from rest_framework.routers import DefaultRouter
from user.views import ProfileViewSet

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)

urlpatterns = router.urls
