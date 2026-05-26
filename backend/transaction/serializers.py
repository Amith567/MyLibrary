from rest_framework import serializers
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    book_name=serializers.CharField(
        source='book.name',read_only=True
    )
    student_name=serializers.CharField(
        source='student.name',read_only=True
    )
    class Meta:
        model=Transaction
        fields=['id','transaction_id','book','book_name','student','student_name','issue_date','return_date','status']
        read_only_fields=['transaction_id','issue_date','return_date']