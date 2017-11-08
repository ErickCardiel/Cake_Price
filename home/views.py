from django.shortcuts import render

# Create your views here.

def muestraTemplate(request):
    return render(request,'home.html')

