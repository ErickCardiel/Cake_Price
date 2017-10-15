from rest_framework import routers
from cotizaciones.views import CotizacionesViewSet

api_router = routers.SimpleRouter()
api_router.register(r'all', CotizacionesViewSet,base_name='Cotizaciones')
