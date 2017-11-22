from django import forms


class ContactForm(forms.Form):
    Email = forms.EmailField(widget=forms.TextInput())
    Titulo = forms.CharField(widget=forms.TextInput())
    Texto = forms.CharField(widget= forms.TextInput())
    # Texto = models.TextField(default="{}")
    docfile = forms.FileField(label='',required=False,widget=forms.FileInput())
