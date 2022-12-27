from django.contrib import admin
from .models import request
from .models import comments

admin.site.register(request)
admin.site.register(comments)