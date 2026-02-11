import re
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
        for field in ["first_name", "last_name", "company_name"]:
            if data.get(field):
                data[field] = data[field].strip()
        
        first = data.get("first_name", None)
        last = data.get("last_name", None)
        company = data.get("company_name", None)

        if not company and not (first and last):
            raise serializers.ValidationError("You must inform a complete name (last name + first name), or a company name.")
        return data
    
    def validate_first_name(self, value):
        if re.search(r"\d", value):
            raise serializers.ValidationError("The fisrt name must not contains number")
        return value
    
    def validate_last_name(self, value):
        if re.search(r"\d", value):
            raise serializers.ValidationError("The last name must not contains number")
        return value
    
# validation a ajouter:
    # pass
    