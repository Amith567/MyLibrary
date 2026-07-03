from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from .models import Book
from .serializers import BookSerializer

class ListCreateBookView(APIView):
    def get(self,request):
        books=Book.objects.all()
        serializer=BookSerializer(books,many=True)
        return Response({"message":serializer.data},status=status.HTTP_200_OK)
    def post(self,request):
        serializer=BookSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data":serializer.data},status=status.HTTP_201_CREATED)

class DetailDeleteUpdateBookView(APIView):
    def get(self,request,pk):
        book=get_object_or_404(Book,id=pk)
        serializer=BookSerializer(book)
        return Response({"data":serializer.data},status=status.HTTP_200_OK)
    def patch(self,request,pk):
        book=get_object_or_404(Book,id=pk)
        serializer=BookSerializer(book,data=request.data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data":serializer.data},status=status.HTTP_200_OK)
    def delete(self,request,pk):
        book=get_object_or_404(Book,id=pk)
        book.delete()
        return Response({"data":"deleted succesfully"},status=status.HTTP_204_NO_CONTENT)


