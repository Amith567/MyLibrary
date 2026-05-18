from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.db.models import Q

@api_view(['POST'])
def register(request):
    username=request.data.get('username')
    password=request.data.get('password')
    email=request.data.get('email')

    if User.objects.filter(Q(username=username) | Q(email=email)).exists():
        return Response({"error":"the username or password already exist"},status=400)

    user=User.objects.create_user(
        username=username,password=password,email=email
    )

    return Response({"message":"user created successfully !"},status=201)

@api_view(['POST'])
def login(request):
    username=request.data.get('username')
    password=request.data.get('password')

    user=authenticate(username=username,password=password)

    if user is None:
        return Response({"error":"invalid credentials"},status=400)
    return Response({"message":"user logged in succesfully !"},status=200)