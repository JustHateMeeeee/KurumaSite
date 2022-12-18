from django.shortcuts import render

# Create your views here.

def own(request):
    return render(request, 'request/own.html')

def articles(request):
    return render(request, 'request/articles.html')

def whereBuy(request):
    return render(request, 'request/whereBuy.html')