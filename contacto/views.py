from django.shortcuts import render, redirect
from django.core.mail import EmailMessage
from .forms import ContactForm

def contacto_view(request):

    if request.method == "POST":
        formulario = ContactForm(request.POST, request.FILES)
        if formulario.is_valid():	
            if 'docfile' in request.FILES:
                img = request.FILES['docfile'].read()
                texto = 'Email: '+formulario.cleaned_data['Email']+'\n'+'Nombre: '+formulario.cleaned_data['Nombre']+'\n\n'+ formulario.cleaned_data['Texto']
                msg = EmailMessage(formulario.cleaned_data['Titulo'], texto, formulario.cleaned_data['Email'], ['pasteleriadc.tj@gmail.com'])
                msg.attach('imagen',img,'image/jpg')
                msg.send()
            else:
                texto = 'Email: '+formulario.cleaned_data['Email']+'\n\n'+ formulario.cleaned_data['Texto']
                msg = EmailMessage(formulario.cleaned_data['Titulo'], texto, to = ['pasteleriadc.tj@gmail.com'])
                msg.send()
				
    formulario = ContactForm()
		
    return render(request,'contacto.html', {'form': formulario}) 