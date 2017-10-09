from rest_framework import routers
from cotizaciones.views import *

api_router = routers.SimpleRouter()
api_router.register('tamano_pan', TamanoViewSet)
