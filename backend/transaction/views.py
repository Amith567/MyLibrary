from django.utils import timezone
from rest_framework.decorators import api_view
from .models import Transaction
from .serializers import TransactionSerializer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

@api_view(['POST'])
def create(request):
    serializer=TransactionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"transaction created succesfully"},status=201)
    return Response(serializer.errors,status=400)
    
@api_view(['POST'])
def close(request,id):
    transaction=get_object_or_404(Transaction,id=id)
    transaction.status='Close'
    return_date=timezone.now()
    transaction.save()
    return Response({"message":"transaction closed"},status=200)

@api_view(['GET'])
def list(request):
    transactions=Transaction.objects.all()
    serializer=TransactionSerializer(transactions,many=True)
    return Response(serializer.data,status=200)