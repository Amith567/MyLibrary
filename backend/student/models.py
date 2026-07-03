from django.db import models
from django.utils import timezone
from django.core.validators import MinValueValidator,MaxValueValidator
from datetime import date

class Department(models.Model):
    name=models.CharField(max_length=100)
    code=models.CharField(max_length=10)
    block=models.CharField(max_length=20)
    def __str__(self):
        return self.name

class Student(models.Model):
    def max_admission_year():
        return date.today().year
    
    name=models.CharField(max_length=20)
    age=models.IntegerField()
    rollno=models.IntegerField()
    department=models.ForeignKey(Department,on_delete=models.CASCADE,related_name='students')
    student_id=models.CharField(blank=True,max_length=20,unique=True)
    admission_year=models.PositiveIntegerField(
        validators=[
            MinValueValidator(2000),MaxValueValidator(max_admission_year)])

    def __str__(self):
        return self.name
    def save(self,*args,**kwargs):
        super().save(*args,**kwargs)
        if not self.student_id:
            self.student_id=f"STU{self.admission_year}{self.department.code.upper()}000{self.rollno}"
            super().save(update_fields=["student_id"])