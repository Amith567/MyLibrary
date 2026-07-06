from django.urls import path
from .views import RecentlyAddedBookView
urlpatterns=[
    path('added/',RecentlyAddedBookView.as_view()),
]