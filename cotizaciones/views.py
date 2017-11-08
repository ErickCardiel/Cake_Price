from rest_framework import viewsets
from cotizaciones.serializers import CotizacionesSerializer
from collections import namedtuple
from rest_framework.response import Response
from cotizaciones.models import *

Cotizaciones = namedtuple('Cotizaciones',('Tamano','TipoPan','AditivosPan','Cubierta','Relleno','Toppings','PreciosExtra'))

class CotizacionesViewSet(viewsets.ViewSet):
    def list(self, request):
        cotizaciones = Cotizaciones(
            Tamano.objects.all(),
            TipoPan.objects.all(),
            AditivosPan.objects.all(),
            Cubierta.objects.all(),
            Relleno.objects.all(),
            Toppings.objects.all(),
            PreciosExtra.objects.all(),
        )
        serializer = CotizacionesSerializer(cotizaciones)
        return Response(serializer.data)
