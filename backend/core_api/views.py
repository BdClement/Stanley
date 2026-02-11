from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import QuoteRequestSerializer
from .utils import send_email

# Create your views here.

class QuoteRequestReceptionView(APIView):
    def post(self, request):
        serializer = QuoteRequestSerializer(data=request.data)
        if serializer.is_valid():
            # Logique d'envoi d'email avec API MilGUN
            # Stocker la donnée par la suite
            response_sending_email = send_email(serializer.data)
            if response_sending_email.status_code in [200, 201]:#C'est ok
                return Response({'message': 'Quote request received. We will get back to you shorlty'})
            else:
                print(f"response status = {response_sending_email.status_code}")
                return Response({
                    'message': 'An error occured while sending email',
                    'mailgun_error': response_sending_email.text,
                    }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)