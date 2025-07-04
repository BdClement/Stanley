from django.urls import path, include
from .views import QuoteRequestReceptionView

app_name = "core_api"

urlpatterns = [
    path('quote_request/', QuoteRequestReceptionView.as_view(), name="quote_request"),
]