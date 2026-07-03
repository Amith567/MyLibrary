from django.urls import path
from .views import ListCreateTransactionView,DetailUpdateDeleteTransactionView,CheckStudentEligibilityView

urlpatterns=[
    path('',ListCreateTransactionView.as_view()),
    path('<int:pk>/',DetailUpdateDeleteTransactionView.as_view()),
    path('eligible/',CheckStudentEligibilityView.as_view()),
]