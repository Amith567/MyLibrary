from django.urls import path
from .views import RecentlyAddedBookView,DashboardAggregatedValuesView,RecentlyReturnedBookView
urlpatterns=[
    path('added/',RecentlyAddedBookView.as_view()),
    path('returned/',RecentlyReturnedBookView.as_view()),
    path('aggregate/',DashboardAggregatedValuesView.as_view()),
]