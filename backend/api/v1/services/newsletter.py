from googleapiclient.discovery import build
from google.oauth2 import service_account
from api.utils.settings import settings
from fastapi import HTTPException


SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
SERVICE_ACCOUNT_FILE = "keys.json"

credentials = None

credentials = service_account.Credentials.from_service_account_file(
    SERVICE_ACCOUNT_FILE, scopes=SCOPES
)

SPREADSHEET_ID = settings.SPREADSHEET_ID


class NewsletterSubscriptionService:
    """Service to manage newsletter subscriptions"""

    def subscribe(self, email: str) -> None:
        
        try:
            # Subscribe the user to the newsletter, adds email to Google Sheets

            service = build("sheets", "v4", credentials=credentials)

            # Call the Sheets API
            sheet = service.spreadsheets()
            write_values = [[email]]

            sheet.values().append(
                spreadsheetId=SPREADSHEET_ID,
                range="Sheet1!A1",
                valueInputOption="USER_ENTERED",
                body={"values": write_values},
            ).execute()

        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))


newsletter_subscription_service = NewsletterSubscriptionService()
