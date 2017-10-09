from django.conf.urls import include, url
from cotizaciones.routes import api_router

urlpatterns = [

    #API
    url(r'^api/', include(api_router.urls)),
]
