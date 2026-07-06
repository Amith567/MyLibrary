from rest_framework import serializers
from book.models import Book

class BookAddedSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields=['id','name','author','added_date']