from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import login,logout
from django.middleware.csrf import get_token
from rest_framework.permissions import AllowAny
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie,csrf_protect
from .serializer import UserRegisterSerializer,UserLoginSerializer
from django.utils.decorators import method_decorator

@ensure_csrf_cookie
def csrf(request):
    token=get_token(request)
    return JsonResponse({"Succes":True,"csrf":token})

class UserRegisterView(APIView):
    def post(self,request):
        serializer=UserRegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({"message":serializer.data},status=status.HTTP_201_CREATED)

@method_decorator(csrf_protect,name='dispatch')
class UserLoginView(APIView):
    permission_classes=[AllowAny]
    def post(self,request):
        serializer=UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data['user']
        login(request,user)
        request.session["username"]=user.username
        return Response({"csrf":get_token(request),"session":request.session.session_key,"username":request.user.username},status=status.HTTP_200_OK)

class UserLogoutView(APIView):
    def post(self,request):
        logout(request)
        return Response({"message":"user logouted."},status=200)

class ChangePasswordView(APIView):
    pass