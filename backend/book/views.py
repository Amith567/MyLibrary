from rest_framework.decorators import api_view
from .serializer import BookSerializer
from .models import Book
from rest_framework.response import Response

@api_view(['POST'])
def add(request):
    serializer=BookSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"book added succesfully","data":serializer.data},status=201)
    return Response({"message":"something went wrong","error":serializer.errors},status=400)

@api_view(['DELETE'])
def delete(request,id):
    try:
        book=Book.objects.get(id=id)
        book.delete()
        return Response({"message":"book deleted"},status=200)
    except Book.DoesNotExist:
        return Response({"error":"book not founded"},status=404)

@api_view(['PATCH'])
def edit(request,id):
    try:
        book=Book.objects.get(id=id)
        serializer=BookSerializer(book,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"book updated","data":serializer.data},status=200)
    except Book.DoesNotExist:
        return Response({"message":"book not exist"},status=404)

