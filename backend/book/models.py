from django.db import models
from django.utils import timezone

class Genere(models.Model):
    genere=models.CharField(max_length=30)
    code=models.PositiveIntegerField()
    def __str__(self):
        return f"{self.id} - {self.genere}"

class Book(models.Model):
    name=models.CharField(max_length=100)
    volume=models.PositiveIntegerField()
    author=models.CharField(max_length=100)
    quantity=models.PositiveIntegerField()
    category=models.ForeignKey(Genere,on_delete=models.CASCADE,related_name='books')
    book_id=models.CharField(blank=True,max_length=20,unique=True)
    added_date=models.DateField(timezone.now())
    def __str__(self):
        return f"{self.name}  v - {self.volume}"
    def save(self,*args,**kwargs):
        super().save(*args,**kwargs)
        if not self.book_id:
            self.book_id=f"BK000{self.category.code}{self.pk}"
            super().save(update_fields=["book_id"])
