
from django.contrib import admin
from django.urls import path,include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/',include('authentication.urls')),
    path('student/',include('student.urls')),
    path('book/',include('book.urls')),
    path('transaction/',include('transaction.urls')),
]
