from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StudentSerializer
from .models import Student
from django.shortcuts import get_object_or_404
from rest_framework import status


class ListCreateStudentView(APIView):
    def get(self,request):
        student=Student.objects.all()
        serializer=StudentSerializer(student,many=True)
        return Response({"data":serializer.data},status=status.HTTP_200_OK)
    def post(self,request):
        serializer=StudentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data":serializer.data},status=status.HTTP_201_CREATED)

class DetailUpdateDeleteStudentView(APIView):
    def get(self,request,pk):
        student=get_object_or_404(Student,id=pk)
        serializer=StudentSerializer(student)
        return Response({"data":serializer.data},status=status.HTTP_200_OK)
    def patch(self,request,pk):
        student=get_object_or_404(Student,id=pk)
        serializer=StudentSerializer(student,data=request.data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data":serializer.data},status=status.HTTP_200_OK)
    def delete(self,request,pk):
        student=get_object_or_404(Student,id=pk)
        student.delete()
        return Response({"message":"deleted succesfully."},status=status.HTTP_204_NO_CONTENT)
