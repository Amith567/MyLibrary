from rest_framework import serializers
from book.models import Book

class BookAddedSerializer(serializers.ModelSerializer):
    class Meta:
        model=Book
        fields=['id','name','author','added_date']

class BookReturnedSerializer(serializers.Serializer):
    id=serializers.IntegerField(source='book.id')
    name=serializers.CharField(source='book.name')
    author=serializers.CharField(source='book.author')
    submitted_date=serializers.DateTimeField()
    class Meta:
        model=Book
        fields=['id','name','author','submitted_date']