from django.urls import path
from . import views
urlpatterns = [
    path('', views.own, name='own'),
    path('articles', views.articles, name='articles'),
    path('whereBuy', views.whereBuy, name='whereBuy'),
    path('error', views.error, name='error'),
    path('Transmission', views.Transmission, name='Transmission'),
    path('Features', views.Features, name='Features'),
    path('kayCars', views.kayCars, name='kayCars'),
    path('sailtHonda', views.sailtHonda, name='sailtHonda'),
    path('variator', views.variator, name='variator')
]