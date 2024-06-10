from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from user.serializers import AuthUserSerializer, UserSerializer
from user.models import Profile


class UserAuthView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        serializer = AuthUserSerializer(request.user)
        return Response(serializer.data)
    

class UserViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = UserSerializer