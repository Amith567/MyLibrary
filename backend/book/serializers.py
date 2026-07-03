from rest_framework import serializers
from .models import Book

class BookSerializer(serializers.ModelSerializer):
    category=serializers.CharField(source='category.genere',read_only=True)
    class Meta:
        model=Book
        fields=['id','name','author','volume','quantity','category','book_id']
        read_only_fields=['id','book_id']
    
    def create(self, validated_data):
        book=Book.objects.create(**validated_data)
        return book