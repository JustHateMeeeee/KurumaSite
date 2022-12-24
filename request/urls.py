from django.urls import path
from . import views
urlpatterns = [
    path('', views.own, name='own'),
    path('articles', views.articles, name='articles'),
    path('whereBuy', views.whereBuy, name='whereBuy'),
    path('error', views.error, name='error')
]