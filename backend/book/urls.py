from django.urls import path
from .views import ListCreateBookView,DetailDeleteUpdateBookView

urlpatterns=[
    path('book/',ListCreateBookView.as_view()),
    path('book/<int:pk>/',DetailDeleteUpdateBookView.as_view()),
]