from django.contrib import admin
from .models import Tamano, TipoPan, AditivosPan, Cubierta, Relleno, Toppings, PreciosExtra


admin.site.register(Tamano),
admin.site.register(TipoPan),
admin.site.register(AditivosPan),
admin.site.register(Cubierta),
admin.site.register(Relleno),
admin.site.register(Toppings),
admin.site.register(PreciosExtra),
