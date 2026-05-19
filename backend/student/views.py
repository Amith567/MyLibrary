from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import StudentSerializer
from .models import Student


@api_view(['POST'])
def add(request):
    serializer=StudentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"student added successully","data":serializer.data},status=201)
    return Response({"error":serializer.errors},status=400)

@api_view(['DELETE'])
def delete(request,id):
    try:
        student=Student.objects.get(id=id)
        student.delete()
        return Response({"message":"student deleted succesfully"},status=200)
    except Student.DoesNotExist:
        return Response({"error":"student not found"},status=404)

@api_view(['PATCH'])
def edit(request,id):
    try:
        student=Student.objects.get(id=id)
        serializer=StudentSerializer(student,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"student updated !","data":serializer.data},status=200)
    except Student.DoesNotExist:
        return Response({"error":"student not found"},status=404)
