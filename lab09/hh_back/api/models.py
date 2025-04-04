from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default="No description available")
    city = models.CharField(max_length=255)
    adress = models.CharField(max_length=255, null=True, blank=True)




class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    salary = models.FloatField(default=0.0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name="vacancies")
