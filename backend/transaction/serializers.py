from rest_framework import serializers
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    student_name=serializers.CharField(source='student.name',read_only=True)
    book_name=serializers.CharField(source='book.name',read_only=True)
    class Meta:
        model=Transaction
        fields=['id','student','book','taken_date','submission_date','submitted_date','transaction_id','is_active','student_name','book_name','transaction_id']
        read_only_fields=['id','transaction_id']