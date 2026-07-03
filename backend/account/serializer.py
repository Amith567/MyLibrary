from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class UserRegisterSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields=['username','password']
    def validate(self, attrs):
        if len(attrs.get('password'))<8:
            raise serializers.ValidationError({"password":"the password must contain 8 characters"})

    def create(self, validated_data):
        user= User.objects.create_user(username=validated_data['username'],password=validated_data['password'])
        return user

class UserLoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField(write_only=True)
    def validate(self, attrs):
        user=authenticate(
            username=attrs.get('username'),password=attrs.get('password'))
        if not user:
            raise serializers.ValidationError({"error":"invalid credentials."})
        attrs['user']=user
        return attrs
