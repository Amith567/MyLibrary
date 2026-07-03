from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Transaction
from .serializers import TransactionSerializer
from django.shortcuts import get_object_or_404

class ListCreateTransactionView(APIView):
    def get(self,request):
        transactions=Transaction.objects.all()
        serializer=TransactionSerializer(transactions,many=True)
        return Response({"data":serializer.data},status=status.HTTP_200_OK)
    