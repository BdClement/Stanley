from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import QuoteRequestSerializer

# Create your views here.

class QuoteRequestReceptionView(APIView):
    def post(self, request):
        serializer = QuoteRequestSerializer(data=request.data)
        if serializer.is_valid():
            # Logique d'envoi d'email
            return Response({'message': 'Quote request received. We will get back to you shorlty'})
            pass
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        pass