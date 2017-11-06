from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^cotizaciones/', include('cotizaciones.urls')),
    url(r'^faq/', include('faq.urls')),
    url(r'^contacto/', include('contacto.urls')),
    url(r'^', include('home.urls')),
]
