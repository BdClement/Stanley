from unittest import TestCase
from unittest.mock import patch, Mock
from core_api.utils import send_email

class TestSendEmail(TestCase):

    @patch("core_api.utils.requests.post")
    def test_send_email_success(self, mock_post):
        mock_response = Mock()
        mock_response.status_code = 200
        mock_post.return_value = mock_response

        data = {
            "email_address": "test@example.com",
            "first_name": "John",
            "last_name": "Doe",
            "quote_request": "Test message"
        }

        response = send_email(data)

        self.assertEqual(response.status_code, 200)
        mock_post.assert_called_once()
