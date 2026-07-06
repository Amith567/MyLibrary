from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from book.models import Book
from student.models import Student
from transaction.models import Transaction
from .serializer import BookAddedSerializer,BookReturnedSerializer
from django.db.models import Sum
from django.utils import timezone

class RecentlyAddedBookView(APIView):
    def get(self,request):
        books=Book.objects.order_by('-added_date')[:3]
        serializer=BookAddedSerializer(books,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

class RecentlyReturnedBookView(APIView):
    def get(self,request):
        books=Transaction.objects.filter(is_active=False).order_by('submitted_date')[:3]
        serializer=BookReturnedSerializer(books,many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)

class DashboardAggregatedValuesView(APIView):
    def get(self,request):
        total_book=Book.objects.aggregate(tb=Sum('quantity'))['tb'] or 0
        availble_book=Book.objects.aggregate(ab=Sum('avilable_quantity'))['ab'] or 0
        total_student=Student.objects.count()
        active_transaction=Transaction.objects.filter(is_active=True).count()
        overdue=Transaction.objects.filter(submission_date__lt=timezone.now(),is_active=True).count() or 0
        HomeCardData=[
    {
        "id":1,
        "no":total_book,
        "title":"Total Books",
        "color":"#3c82f6"
    },{
        "id":2,
        "no":availble_book,
        "title":"Available Books",
        "color":"#0ea23b"
    },{
        "id":3,
        "no":230,
        "title":"Borrowed Books",
        "color":"#f98500"
    },{
        "id":4,
        "no":total_student,
        "title":"Total Students",
        "color":"#6D28D9"
    },{
        "id":5,
        "no":active_transaction,
        "title":"Active Transactions",
        "color":"#0598AF"
    },{
        "id":6,
        "no":overdue,
        "title":"Overdue",
        "color":"#E5362A"
    }
]
        return Response(HomeCardData,status=status.HTTP_200_OK)