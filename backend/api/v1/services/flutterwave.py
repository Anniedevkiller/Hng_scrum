import httpx
from api.utils.settings import settings
from decimal import Decimal
from fastapi import HTTPException
from uuid_extensions import uuid7
from typing import Dict



class FlutterWaveService:
    def __init__(self):
        self.headers = {
            "Authorization": f"Bearer {settings.FLUTTERWAVE_SECRET_KEY}",
            "Content-Type": "application/json",
        }
        
    async def initiate_payment(self, amount: Decimal, currency: str, customer_email: str, project_id: str) -> Dict:
        try:
            payload = {
                "tx_ref": uuid7(as_type='str'),
                "amount": amount,
                "currency": currency,
                "redirect_url": settings.FLUTTERWAVE_SUCCESS_URL,
                "customer": {
                    "email": customer_email,
                },
                "customizations": {
                    "title": "Donation to MKE - Verein",
                },
                "meta":{
                    "project": f"PROJECT-{project_id}"
                }
            }

            async with httpx.AsyncClient() as client:
                response = await client.post(f"{settings.FLUTTERWAVE_URL}/payments", json=payload, headers=self.headers)

            response.raise_for_status()
            return response.json()

        except httpx.HTTPStatusError as e:
            print(e)
            raise HTTPException(
                status_code=e.response.status_code,
                detail=str(e)
            )

        except Exception as e:
            print(f"Unexpected error: {str(e)}")
            raise HTTPException(
                status_code=500,
                detail=f"Unexpected error: {str(e)}"
            )
    
    async def get_payment_details(self, tx_ref: str) -> Dict:
        """
        Retrieves the details of a payment using the transaction reference.
        """
        try:
            url = f"{settings.FLUTTERWAVE_URL}/transactions/verify_by_reference?tx_ref={tx_ref}"
            async with httpx.AsyncClient() as client:
                response = await client.get(url, headers=self.headers)
            print(response.text)
            response.raise_for_status()  # Raise an error for bad HTTP responses
            return response.json()  # Return the payment details response

        except httpx.HTTPStatusError as e:
            print(e)
            raise HTTPException(
                status_code=e.response.status_code,
                detail=f"Error fetching payment details: {e.response.text}"
            )
        except Exception as e:
            raise e
            print(f"Unexpected error: {str(e)}")
            raise HTTPException(
                status_code=500,
                detail=f"Unexpected error: {str(e)}"
            )

    async def verify_payment(self, tx_ref: str, otp: str) -> Dict:
        """
        Verifies a payment using the transaction reference and OTP (if applicable).
        """
        try:
            url = f"{settings.FLUTTERWAVE_URL}/verify"
            payload = {
                "tx_ref": tx_ref,
                "otp": otp
            }
            async with httpx.AsyncClient() as client:
                response = await client.post(url, json=payload, headers=self.headers)

            response.raise_for_status()
            return response.json()
        
        except httpx.HTTPStatusError as e:
            print(e)
            raise HTTPException(
                status_code=e.response.status_code,
                detail=f"Error verifying payment: {e.response.text}"
            )
        except Exception as e:
            print(f"Unexpected error: {str(e)}")
            raise HTTPException(
                status_code=500,
                detail=f"Unexpected error: {str(e)}"
            )

    async def handle_payment_success(self, tx_ref: str, status: str) -> Dict:
        """
        Verifies the payment success by checking the tx_ref and status.
        This method is called when Flutterwave redirects the user to the payment success URL.
        """
        try:
            if status != "successful":
                raise HTTPException(status_code=400, detail="Payment was not successful")

            payment_details = await self.get_payment_details(tx_ref)

            if payment_details['data']['status'] != 'successful':
                raise HTTPException(status_code=400, detail="Payment verification failed")

            return payment_details

        except Exception as e:
            raise HTTPException(status_code=500, detail=f"An error occurred: {str(e)}")

flutterwave_service = FlutterWaveService()