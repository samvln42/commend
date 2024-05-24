# notes/urls.py

from django.urls import path
from .views import NoteListCreateView, RegisterListCreateView

urlpatterns = [
    path('notes/', NoteListCreateView.as_view(), name='note-list-create'),
    path('signup/', RegisterListCreateView.as_view(), name='user-list-create'),
]
