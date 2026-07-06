from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from book.models import Book
from .serializer import BookAddedSerializer

class RecentlyAddedBookView(APIView):
    def get(self,request):
        books=Book.objects.order_by('-added_date')[:3]
        serializer=BookAddedSerializer(books,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
        