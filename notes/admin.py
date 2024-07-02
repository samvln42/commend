from django.contrib import admin
from notes.models import Note, RegisterUser

# Register your models here.
admin.site.register(Note)
admin.site.register(RegisterUser)