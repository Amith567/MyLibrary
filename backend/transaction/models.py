from django.db import models
from django.utils import timezone
from datetime import timedelta

class Transaction(models.Model):
    student=models.ForeignKey("student.Student",on_delete=models.CASCADE,related_name='transactions')
    book=models.ForeignKey("book.Book",on_delete=models.CASCADE,related_name='transactions')
    taken_date=models.DateTimeField()
    submission_date=models.DateTimeField(null=True,blank=True)
    submitted_date=models.DateTimeField(null=True,blank=True)
    transaction_id=models.CharField(max_length=20,unique=True,blank=True)
    period=models.PositiveIntegerField()
    is_active=models.BooleanField(default=True)
    def __str__(self):
        return f"{self.transaction_id} by {self.student.name} on taking the book {self.book.name}."
    def save(self,*args,**kwargs):
        super().save(*args,**kwargs)
        if not self.transaction_id:
            self.transaction_id=f'TRX{timezone.now().strftime('%y%m%d')}000{self.pk}'
            super().save(update_fields=['transaction_id'])
        if self.taken_date:
            self.submission_date=self.taken_date+timedelta(days=self.period)
            super().save(update_fields=['submission_date'])