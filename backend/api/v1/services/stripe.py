import stripe as st
from api.utils import settings
from fastapi import HTTPException
from decimal import Decimal
from typing import Dict




class StripeService:
    def __init__(self):
        st.api_key = settings.STRIPE_SECRET_KEY
        
    def create_checkout_session(self, amount: Decimal, currency: str, email: str, project_id:str) -> Dict:
        try:
            amount_in_smallest_unit = int(amount * 100)

            session = st.checkout.Session.create(
                payment_method_types=[
                    "card",
                    "link",
                    "alipay",
                    "wechat_pay",
                    "cashapp",
                    "eps",
                    "klarna",
                    "bancontact",
                    "sepa_debit",
                    "amazon_pay"
                ],
                payment_method_options={
                    "wechat_pay": {
                        "client": "web"
                    }
                },
                line_items=[
                    {
                        "price_data": {
                            "currency": currency,
                            "product_data": {
                                "name": "Donation to MKE - Verein",
                            },
                            "unit_amount": amount_in_smallest_unit,
                        },
                        "quantity": 1,
                    }
                ],
                metadata={
                    "project_id": F"PROJECT_{project_id}"
                },
                submit_type="donate",
                mode="payment",
                success_url=settings.STRIPE_SUCCESS_URL,
                cancel_url=settings.STRIPE_CANCEL_URL,
                customer_email=email
            )

            return {
                "status": "success",
                "checkout_url": session.url,
            }

        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"An error occurred: {str(e)}"
            )
    

    def handle_success(self, session_id: str):
        """
        Process the successful payment session.
        """
        if not session_id:
            raise HTTPException(status_code=400, detail="Session ID is required.")
            
        try:
            payment_session = st.checkout.Session.retrieve(session_id)
            payment_session["amount_total"] = payment_session["amount_total"] / 100
            return payment_session
        except st.error.StripeError as e:
            raise HTTPException(status_code=500, detail=f"Stripe API error: {e.user_message or str(e)}")


stripe_service = StripeService()
