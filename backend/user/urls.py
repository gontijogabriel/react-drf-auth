from django.urls import path
from user.views import UserAuthView, UserViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'user', UserViewSet, basename='user')

urlpatterns = [
    path('auth-user/', UserAuthView.as_view(), name='auth-user'),
]

urlpatterns += router.urls
