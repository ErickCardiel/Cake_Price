from django.conf.urls import include, url
from cotizaciones.routes import api_router

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [


    #API
    url(r'^api/', include(api_router.urls)),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
