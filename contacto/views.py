from .forms import ContactForm
from django.shortcuts import render
from django import forms
from django.core.mail import EmailMultiAlternatives

def contacto_view(request):
    info_enviado = False
    email = ""
    titulo = ""
    texto = ""

    if request.method == "POST":
        formulario = ContactForm(request.POST)
        if formulario.is_valid():
            info_enviado = True
            email = formulario.cleaned_data['Email'] #En mayuscula por que asi lo definimos en los forms
            titulo = formulario.cleaned_data['Titulo']
            texto = formulario.cleaned_data['Texto']



            to_admin = 'gato_ryuzaki@hotmail.com'
            html_content = "Informacion recibida <br><br>**Mensaje** %s"%(texto)
            msg = EmailMultiAlternatives('Asunto del correo',html_content,'from@server.com',[to_admin])
            msg.attach_alternative(html_content,'text/html') #Defino el contenido como HTML
            msg.attach_file(wea)
            msg.mixed_subtype = 'related'
            msg.send()
    else:
        formulario = ContactForm()
    ctx = {'form': formulario,'email':email,'titulo':titulo,'texto':texto,'info_enviado':info_enviado}
    return render(request,'contacto.html', ctx)