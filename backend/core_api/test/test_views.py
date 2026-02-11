
# Create your tests here.

from django.core import mail
from django.test import TestCase

from unittest.mock import patch
from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status

class QuoteRequestReceptionViewTests(APITestCase):

    def setUp(self):
        # Exemple de données valides
        self.valid_data = {
            "first_name": "John",
            "last_name": "Doe",
            "company_name": "",
            "email_address": "john@example.com",
            "phone_number": "+33612345678",
            "quote_request": "Je souhaite un devis pour X projet"
        }
        self.url = "/api/quote_request/"

    @patch("core_api.views.send_email")
    def test_post_valid_sends_email(self, mock_send_email):
        mock_send_email.return_value.status_code = 200
        mock_send_email.return_value.text = "OK"

        response = self.client.post(self.url, data=self.valid_data, format='json')

        mock_send_email.assert_called_once_with(self.valid_data)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], 'Quote request received. We will get back to you shorlty')

    @patch("core_api.views.send_email")
    def test_post_email_fail(self, mock_send_email):
        mock_send_email.return_value.status_code = 500
        mock_send_email.return_value.text = "Erreur serveur Mailgun"

        response = self.client.post(self.url, data=self.valid_data, format='json')

        mock_send_email.assert_called_once_with(self.valid_data)
        self.assertEqual(response.status_code, status.HTTP_500_INTERNAL_SERVER_ERROR)
        self.assertIn("mailgun_error", response.data)

    def test_post_invalid_data(self):
        invalid_data = self.valid_data.copy()
        invalid_data.pop("first_name")
        invalid_data.pop("last_name")
        invalid_data["company_name"] = ""

        response = self.client.post(self.url, data=invalid_data, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("non_field_errors", response.data) 
