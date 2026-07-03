from django.urls import path
from .views import ListCreateTransactionView

urlpatterns=[
    path('transaction/',ListCreateTransactionView.as_view()),
]