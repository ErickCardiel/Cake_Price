from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from cotizaciones.models import Tamano
from cotizaciones.serializers import TamanoSerializer

@csrf_exempt
def lista_tamanos(request):
    if request.method == 'GET':
        tamanos = Tamano.objects.all()
        serializer = TamanoSerializer(tamanos, many=True)
        return JsonResponse(serializer.data, safe=False)