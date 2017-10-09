from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from rest_framework import viewsets
from cotizaciones.models import *
from cotizaciones.serializers import *

class TamanoViewSet(viewsets.ModelViewSet):
    queryset = Tamano.objects.all()
    serializer_class = TamanoSerializer