from django.db import models
from django.contrib.auth.models import User

class Pros(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')  # Specify upload directory
    price = models.IntegerField()
    quantity = models.IntegerField(default=1)

    def _str_(self):
        return self.name
    
class Medicines(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')  # Specify upload directory
    price = models.IntegerField()
    quantity = models.IntegerField(default=1)
    def _str_(self):
        return self.name


class Products(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='images/')  # Specify upload directory
    price = models.IntegerField()
    quantity = models.IntegerField(default=1)
    def _str_(self):
        return self.name


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)  # Link to a user
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    # image = models.ImageField()
    quantity = models.PositiveIntegerField(default=1)
    

    @property
    def total_cost(self):
        return self.quantity * self.product.price