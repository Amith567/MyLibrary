from rest_framework import serializers
from .models import Student,Department

class StudentSerializer(serializers.ModelSerializer):
    department_name=serializers.CharField(source='department.name',read_only=True)
    class Meta:
        model=Student
        fields=['id','name','age','reg_no','department','department_name','student_id']
        read_only_fields=['id','student_id']
    def create(self, validated_data):
        student=Student.objects.create(**validated_data)
        return student