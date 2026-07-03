from django.urls import path
from .views import ListCreateStudentView,DetailUpdateDeleteStudentView

urlpatterns=[
    path('student/',ListCreateStudentView.as_view()),
    path('student/<int:pk>/',DetailUpdateDeleteStudentView.as_view()),
]