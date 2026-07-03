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
    def post(self,request):
        serializer=TransactionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data":serializer.data},status=status.HTTP_201_CREATED)

class DetailUpdateDeleteTransactionView(APIView):
    def get(self,request,pk):
        transaction=get_object_or_404(Transaction,id=pk)
        serializer=TransactionSerializer(transaction)
        return Response({"data":serializer.data},status=status.HTTP_200_OK)
    def patch(self,request,pk):
        transaction=get_object_or_404(Transaction,id=pk)
        serializer=TransactionSerializer(transaction,data=request.data,partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"data":serializer.data},status=status.HTTP_200_OK)
    def delete(self,request,pk):
        transaction=get_object_or_404(Transaction,id=pk)
        transaction.delete()
        return Response({"messge":"deleted"},status=status.HTTP_204_NO_CONTENT)

class CheckStudentEligibilityView(APIView):
    def get(self,request):
        stud_id=request.query_params.get("id")
        active_tran_count=Transaction.objects.filter(
            student__id=stud_id,
            is_active=True).count()
        
        if active_tran_count<3:
            return Response({"message":"user is eligible"},status=status.HTTP_200_OK)
        else:
            return Response({"message":f"user currently borrowed {active_tran_count} books."},status=status.HTTP_200_OK)
