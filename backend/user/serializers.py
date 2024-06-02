from rest_framework import serializers
from user.models import Profile
from django.contrib.auth.hashers import make_password

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(ProfileSerializer, self).create(validated_data)
