from django.db import models

class Student(models.Model):
    dep_choices=[
        ('CSE','CSE'),
        ('EC','EC'),
        ('CE','CE'),
        ('ME','ME'),
        ('EEE','EEE'),
    ]
    gender_choices=[
        ('M','M'),
        ('F','F'),
        ('O','O'),
    ]

    name=models.CharField(max_length=20)
    register_no=models.CharField(max_length=10)
    admission_year=models.IntegerField()
    department=models.CharField(choices=dep_choices,max_length=3)
    gender=models.CharField(choices=gender_choices,max_length=1)

    def __str__(self):
        return f"{self.name} of {self.department} {self.admission_year} year"