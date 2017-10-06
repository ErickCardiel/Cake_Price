from django.db import models

class Tamano(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    multiplicador = models.FloatField()



class TipoPan(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()

class AditivosPan(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()


class Cubierta(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()

class Relleno(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()


class Toppings(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()


class PreciosExtra(models.Model):
    elID = models.PositiveSmallIntegerField()
    nombre = models.CharField(max_length=75)
    precio = models.FloatField()