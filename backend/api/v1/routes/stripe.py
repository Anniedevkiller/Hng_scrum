from fastapi import APIRouter, Request, Query
from api.utils import success_response, get_user_currency_from_ip
from api.v1.schemas.stripe import DonationRequest
from api.v1.services.stripe import stripe_service

stripe_donation = APIRouter(prefix="/stripe", tags=["Stripe"])



@stripe_donation.post("/donate")
async def create_donation_session_endpoint(donation: DonationRequest, request: Request):
    session_info = stripe_service.create_checkout_session(donation.amount, get_user_currency_from_ip(request), donation.email, donation.project_id)   
    return success_response(
        200,
        "Donation Session Created Successful",
        session_info
    )


@stripe_donation.get("/success")
async def success(
    session_id: str = Query(..., alias="session_id")
):
    """
    Handle successful payment completion.
    """
    response = stripe_service.handle_success(session_id)
    return success_response(
        200,
        "Payment completed successfully.",
        response
    )

@stripe_donation.get("/cancel")
async def cancel():
    """
    Handle payment cancellation by the user.
    """
    return success_response(
        200,
        "Payment was canceled by the user."
    )
