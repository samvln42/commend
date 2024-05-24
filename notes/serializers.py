# notes/serializers.py

from rest_framework import serializers
from .models import Note, RegisterUser

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'
        
class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisterUser
        fields = '__all__'
