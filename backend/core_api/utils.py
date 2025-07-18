import os
import requests
from dotenv import load_dotenv

load_dotenv()

def send_email(data_received):
    # En production => faire verifier un domaine (addresse expeditrice) et configurer clé api
    # Modifier l'adresse de reception du mail par l'adresse de Menuitek
    return requests.post(
                "https://api.mailgun.net/v3/sandbox8dcfe942987848ebaed4089a92f0a8a9.mailgun.org/messages",
  		auth=("api", os.getenv('API_KEY', 'API_KEY')),
  		data={"from": "Mailgun Sandbox <postmaster@sandbox8dcfe942987848ebaed4089a92f0a8a9.mailgun.org>",
			"to": "Stanley <probernardclement2@gmail.com>", #+ data_received["email_address"] + ">",#
  			"subject": f"Demande de Devis - {get_client(data_received)}",
  			"text": f"""Congratulations Stanley, you just sent an email with Mailgun! You are truly awesome!\n\
            Client : {get_client(data_received)}\n\
            Mail : {data_received.get('email_address')}\n\
            Numero de telephone : {data_received.get('phone_number')}\n\
            Demande : {data_received.get('quote_request')}\n\
            """}
            )

def get_client(data):
    if data.get("company_name"):
        return data.get("company_name")
    else:
        return data.get("first_name") + " " + data.get("last_name")