from .models import request
from django.forms import ModelForm, TextInput


class requestForm(ModelForm):
    class Meta:
        model = request
        fields = ['userName', 'contacts']

        widgets = {
            "userName": TextInput(attrs={
                'class': 'popupInput',
                'placeholder': 'Введите имя',
                'id': 'InpName'
            }),
            "contacts": TextInput(attrs={
                'class': 'popupInput',
                'placeholder': 'Введите телефон или почту',
                'id': 'InpNum'
            })
        }