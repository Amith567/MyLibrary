from django.contrib import admin
from .models import Student

class StudentAdmin(admin.ModelAdmin):
    list_display=['id','name','register_no','admission_year']
admin.site.register(Student,StudentAdmin)