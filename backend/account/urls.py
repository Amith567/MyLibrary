from django.urls import path
from .views import csrf,UserRegisterView,UserLoginView,UserLogoutView

urlpatterns=[
    path('csrf/',csrf),
    path('register/',UserRegisterView.as_view()),
    path('login/',UserLoginView.as_view()),
    path('logout/',UserLogoutView.as_view()),
    
]