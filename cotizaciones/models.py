from django.db import models

class Tamano(models.Model):
    elID = models.IntegerField()
    nombre = models.CharField(max_length=75)
    multiplicador = models.FloatField()
    logo = models.CharField(max_length=1000)

    def __str__(self):
            return '[ID:' + str(self.elID) + ']' + '[' + self.nombre + ']'

    # El str(variable) es un casteo a convertirlo a string

class TipoPan(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()
    logo = models.CharField(max_length=1000)

    def __str__(self):
            return '[' + self.nombre + ']'

class AditivosPan(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()
    logo= models.CharField(max_length=1000)

    def __str__(self):
            return '[' + self.nombre + ']'


class Cubierta(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()
    logo= models.CharField(max_length=1000)

    def __str__(self):
            return '[' + self.nombre + ']'

class Relleno(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()
    logo = models.CharField(max_length=1000)

    def __str__(self):
            return '[' + self.nombre + ']'
			
class RellenoFruta(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()
    logo = models.CharField(max_length=1000)

    def __str__(self):
            return '[' + self.nombre + ']'


class Toppings(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()
    logo= models.CharField(max_length=1000)

    def __str__(self):
            return '[' + self.nombre + ']'


class PreciosExtra(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()


    def __str__(self):
            return '[' + self.nombre + ']'
