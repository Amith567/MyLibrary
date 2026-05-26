from django.utils import timezone
from django.db import models
from book.models import Book
from student.models import Student

class Transaction(models.Model):
    student=models.ForeignKey(
        Student,on_delete=models.CASCADE,related_name='transactions'
    )
    book=models.ForeignKey(
        Book,on_delete=models.CASCADE,related_name='transactions'
    )
    status_choices=[
        ('Active','Active'),
        ('Close','Close'),
    ]
    issue_date=models.DateTimeField(auto_now_add=True)
    return_date=models.DateTimeField(null=True,blank=True)
    status=models.CharField(
        max_length=10,choices=status_choices,default='Active'
    )
    transaction_id=models.CharField(
        max_length=20,unique=True,blank=True
    )
    def save(self,*args,**kwargs):
        if not self.transaction_id:
            count=Transaction.objects.count()+1
            date=timezone.now().strftime('%Y%m%d')
            self.transaction_id=f"TRX{date}{count:03d}"
        super().save(*args,**kwargs)

    def __str__(self):
        return str(self.transaction_id)