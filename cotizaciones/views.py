from django.shortcuts import render
from django.shortcuts import render_to_response
from django.shortcuts import HttpResponse
from django.template import RequestContext
from django.template import loader
from .models import *

def muestraAditivos(request):

    tamano = Tamano.objects.all()
    tipoPan = TipoPan.objects.all()
    aditivosPan = AditivosPan.objects.all()
    cubierta = Cubierta.objects.all()
    relleno = Relleno.objects.all()
    toppings = Toppings.objects.all()
    precioExtra = PreciosExtra.objects.all()



    template = loader.get_template('cotizar.html')
    context = {
        'tamano': tamano,
        'tipoPan': tipoPan,
        'aditivosPan': aditivosPan,
        'cubierta': cubierta,
        'relleno': relleno,
        'toppings': toppings,
        'precioExtra': precioExtra,
    }
    return HttpResponse(template.render(context, request))