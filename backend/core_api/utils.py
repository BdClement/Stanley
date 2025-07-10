import os
import requests

def send_email(data_received):
    # Check des donnes de tests API !
    return requests.post(
                "https://api.mailgun.net/v3/sandbox8dcfe942987848ebaed4089a92f0a8a9.mailgun.org/messages",
  		auth=("api", os.getenv('API_KEY', 'API_KEY')),
  		data={"from": "Mailgun Sandbox <postmaster@sandbox8dcfe942987848ebaed4089a92f0a8a9.mailgun.org>",
			"to": "Stanley <" + data_received["email_address"] + ">",#"<probernardclement2@gmail.com>"
  			"subject": "Hello Stanley",
  			"text": f"Congratulations Stanley, you just sent an email with Mailgun! You are truly awesome!\
            Le client est {get_client(data_received)}, son numero est , son mail est \
            Et sa demande est :\
            "}
            )

def get_client(data):
    if data.get("company_name"):
        return data.get("company_name")
    else:
        return data.get("first_name") + data.get("last_name")