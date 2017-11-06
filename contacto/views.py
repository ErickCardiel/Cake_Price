from django.shortcuts import render

def muestraTemplate(request):
    return render(request,'contacto.html')