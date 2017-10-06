from django.conf.urls import url
from django.contrib import admin

from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^cotizaciones/', include('cotizaciones.urls')),
]
