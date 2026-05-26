from django.db import models

class Book(models.Model):
    genere_choices=[
        ('sceince','sceince'),
        ('friction','friction'),
        ('technology','technology'),
        ('fairy tale','fairy tale'),
    ]
    name=models.CharField(max_length=30)
    author=models.CharField(max_length=30)
    volume=models.CharField(max_length=20)
    genere=models.CharField(max_length=10,choices=genere_choices)
    quantity=models.IntegerField()

    def __str__(self):
        return f"{self.name} of volume {self.volume}"