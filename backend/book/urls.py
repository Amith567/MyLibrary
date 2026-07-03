from django.urls import path
from .views import ListCreateBookView,DetailDeleteUpdateBookView,CheckBookAvailability

urlpatterns=[
    path('',ListCreateBookView.as_view()),
    path('<int:pk>/',DetailDeleteUpdateBookView.as_view()),
    path('availble/',CheckBookAvailability.as_view()),
]