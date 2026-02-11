from django.urls import reverse
from rest_framework.test import APITestCase
from ..serializer import QuoteRequestSerializer

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

    def test_valid_data_people(self):
        """Should be a valid data for people"""
        serializer = QuoteRequestSerializer(data=self.valid_data)
        # ret = serializer.is_valid()
        # print(serializer.errors)
        self.assertEqual(serializer.is_valid(), True)

    def test_valid_data_company(self):
        """Should be a valid data for compamy"""
        company_data = self.valid_data.copy()
        company_data.pop("last_name", "first_name")
        company_data["company_name"] = "Menuitek"
        serializer = QuoteRequestSerializer(data=company_data)
        self.assertEqual(serializer.is_valid(), True)

    
    def test_invalid_bad_name(self):
        """Should be a invalid valid data because name or company is invalid"""
        invalid_name = self.valid_data.copy()
        invalid_name.pop("last_name")
        serializer = QuoteRequestSerializer(data=invalid_name)
        self.assertEqual(serializer.is_valid(), False)

        invalid_name = self.valid_data.copy()
        invalid_name.pop("first_name")
        serializer = QuoteRequestSerializer(data=invalid_name)
        self.assertEqual(serializer.is_valid(), False)

    def test_invalid_required_fields(self):
        """Should be a invalid valid data because required field is missing"""
        missing_required = self.valid_data.copy()
        missing_required.pop("email_address")
        serializer = QuoteRequestSerializer(data=missing_required)
        self.assertEqual(serializer.is_valid(), False)

        missing_required = self.valid_data.copy()
        missing_required.pop("phone_number")
        serializer = QuoteRequestSerializer(data=missing_required)
        self.assertEqual(serializer.is_valid(), False)

        missing_required = self.valid_data.copy()
        missing_required.pop("quote_request")
        serializer = QuoteRequestSerializer(data=missing_required)
        self.assertEqual(serializer.is_valid(), False)

        missing_required["quote_request"] = ""
        serializer = QuoteRequestSerializer(data=missing_required)
        self.assertEqual(serializer.is_valid(), False)

    def test_invalid_phone_format(self):
        """Should be a invalid valid data because phone number is not french"""
        wrong_phone_format =  self.valid_data.copy()
        wrong_phone_format["phone_number"] = "+44143869490"
        serializer = QuoteRequestSerializer(data=wrong_phone_format)
        self.assertEqual(serializer.is_valid(), False)

        wrong_phone_format["phone_number"] = "01438694909"
        serializer = QuoteRequestSerializer(data=wrong_phone_format)
        self.assertEqual(serializer.is_valid(), False)

        wrong_phone_format["phone_number"] = ""
        serializer = QuoteRequestSerializer(data=wrong_phone_format)
        self.assertEqual(serializer.is_valid(), False)

        wrong_phone_format["phone_number"] = "+0780808080"
        serializer = QuoteRequestSerializer(data=wrong_phone_format)
        self.assertEqual(serializer.is_valid(), False)