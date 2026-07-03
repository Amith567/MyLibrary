from django.urls import path
from .views import ListCreateStudentView,DetailUpdateDeleteStudentView

urlpatterns=[
    path('',ListCreateStudentView.as_view()),
    path('<int:pk>/',DetailUpdateDeleteStudentView.as_view()),
]