from django.urls import path
from .views import add,edit,delete,list

urlpatterns=[
    path('add/',add),
    path('<int:id>/edit/',edit),
    path('<int:id>/delete/',delete),
    path('list/',list),
]