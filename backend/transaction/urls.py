from django.urls import path
from .views import create,close,list

urlpatterns=[
    path('create/',create),
    path('<int:id>/close/',close),
    path('list/',list),
]