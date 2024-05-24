# notes/views.py

from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from .models import Note, RegisterUser
from .serializers import NoteSerializer, RegisterUserSerializer

class NoteListCreateView(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    
class RegisterListCreateView(generics.ListCreateAPIView):
    queryset = RegisterUser.objects.all()
    serializer_class = RegisterUserSerializer
