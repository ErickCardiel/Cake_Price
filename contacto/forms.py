from django import forms


class ContactForm(forms.Form):
    Nombre = forms.CharField(label='Nombre', widget=forms.TextInput())
    Email = forms.EmailField(label='Correo ', widget=forms.TextInput())
    Titulo = forms.CharField(label='Asunto ', widget=forms.TextInput())
    Texto = forms.CharField(label='Mensaje', widget=forms.TextInput())
    docfile = forms.FileField(label='', required=False, widget=forms.FileInput())