from django.contrib import admin

# Register your models here.
from .models import MyUser,Note
admin.site.register(MyUser)
admin.site.register(Note)