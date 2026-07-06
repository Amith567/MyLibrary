
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/account/',include('account.urls')),
    path('api/book/',include('book.urls')),
    path('api/student/',include('student.urls')),
    path('api/transaction/',include('transaction.urls')),
    path('api/dashboard/',include('dashboard.urls')),
]
