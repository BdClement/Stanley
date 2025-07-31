from rest_framework import serializers
from phonenumber_field.serializerfields import PhoneNumberField

# A TESTER !
class QuoteRequestSerializer(serializers.Serializer):
    # Fields
    last_name = serializers.CharField(max_length=30, required=False, allow_null=True, allow_blank=True)
    first_name = serializers.CharField(max_length=30, required=False, allow_null=True, allow_blank=True)
    company_name = serializers.CharField(max_length=30, required=False, allow_null=True, allow_blank=True)
    email_address = serializers.EmailField(max_length=100)
    phone_number = PhoneNumberField(region='FR')
    quote_request = serializers.CharField(max_length=1000)

    # Validation
    def validate(self, data):
        first = data.get("first_name", "").strip()
        last = data.get("last_name", "").strip()
        company = data.get("company_name", "").strip()

        # A faire dans UX/UI faire un choix et obtenir des fields correpsondant
        if not company and not (first and last):
            raise serializers.ValidationError("You must inform a complete name (last name + first name), or a company name.")
        return data
    
# validation a ajouter:
    # Pas de nombre pour last_name,first_name
    