from django.urls import reverse
from rest_framework.test import APITestCase
from .serializer import QuoteRequestSerializer

class TestQuoteRequestSerializer(APITestCase):

    def setUp(self):
        self.url = reverse('core_api:quote_request')
        self.valid_data = {
            "last_name": "Dufour",
            "first_name": "Pierrick",
            "email_address": "pierrickdufour@gmail.com",
            "phone_number": "0143869490",
            "quote_request": "Bonjour, je cherche a faire faire mes fenetres pour une meilleur isolation. J'aimerais avoir une idée des prix que vous pratiquez. Pouvez vous revenir ver moi ? Merci."
        }

    def test_valid_data(self):
        """Should be a valid data"""
        serializer = QuoteRequestSerializer(data=self.valid_data)
        # ret = serializer.is_valid()
        # print(serializer.errors)
        self.assertEqual(serializer.is_valid(), True)
