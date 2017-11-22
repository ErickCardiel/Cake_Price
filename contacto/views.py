from django.shortcuts import render, redirect
from .forms import ContactForm

from django.core.mail import EmailMessage
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def contacto_view(request):

    if request.method == "POST":
        formulario = ContactForm(request.POST, request.FILES)
        if formulario.is_valid():

            if 'docfile' in request.FILES:
                img_data = request.FILES['docfile'].read()

                msg = EmailMessage(formulario.cleaned_data['Titulo'], formulario.cleaned_data['Texto'], formulario.cleaned_data['Email'], ['outline.coding@gmail.com'])
                msg.attach('imagen',img_data,'image/jpg')
                msg.send()
            else:
                msg = EmailMessage(formulario.cleaned_data['Titulo'], formulario.cleaned_data['Texto'], formulario.cleaned_data['Email'], ['outline.coding@gmail.com'])
                msg.send()

    else:
        formulario = ContactForm()

    return render(request,'contacto.html', {'form': formulario})
