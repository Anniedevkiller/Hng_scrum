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


class VolunteerService:
    """Service to manage new volunteers"""

    def submit(self, name: str, address: str, phone_no: str, email: str, gender: str, area_of_interests: str) -> None:
        
        try:
            # A new user submits the volunteer form, adds data to Google Sheets

            service = build("sheets", "v4", credentials=credentials)

            # Call the Sheets API
            sheet = service.spreadsheets()
            write_values = [
                [name, address, phone_no, email, gender, area_of_interests]
            ]

            sheet.values().append(
                spreadsheetId=SPREADSHEET_ID,
                range="Sheet1!A1",
                valueInputOption="USER_ENTERED",
                body={"values": write_values},
            ).execute()

        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))


volunteer_service = VolunteerService()
