from django.db import models
from django.core.validators import MinValueValidator
from decimal import Decimal

# Create your models here.
class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=8, decimal_places=2,validators=[MinValueValidator(Decimal('0.00'))])
    imagen = models.ImageField(upload_to='productos/', blank=True, null=True)