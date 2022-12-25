from django.shortcuts import render, redirect
from .models import request
from .forms import requestForm
# Create your views here.

def own(request):
    error = ''
    if request.method == 'POST':
        form = requestForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('own')
        else:
            error = 'Неверное заполнение данных'

    form = requestForm()

    data = {
        'form': form,
        'error': error
     }
    return render(request, 'request/own.html', data)

def articles(request):
    return render(request, 'request/articles.html')

def whereBuy(request):
    return render(request, 'request/whereBuy.html')

def error(request):
    return render(request, 'request/error.html')

def Transmission(request):
    return render(request, 'request/Transmission.html')

def Features(request):
    return render(request, 'request/Features.html')

def kayCars(request):
    return render(request, 'request/kayCars.html')

def sailtHonda(request):
    return render(request, 'request/sailtHonda.html')

def variator(request):
    return render(request, 'request/variator.html')