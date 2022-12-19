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