from rest_framework import serializers
from book.models import Book

class BookAddedSerializer(serializers.ModelSerializer):
    date=serializers.DateTimeField(source='added_date')
    class Meta:
        model=Book
        fields=['id','name','author','date']

class BookReturnedSerializer(serializers.Serializer):
    id=serializers.IntegerField(source='book.id')
    name=serializers.CharField(source='book.name')
    author=serializers.CharField(source='book.author')
    date=serializers.DateTimeField(source='submitted_date')
    class Meta:
        model=Book
        fields=['id','name','author','date']