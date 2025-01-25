from fastapi import APIRouter, Request, Query
from api.utils import success_response, get_user_currency_from_ip
from api.v1.schemas.stripe import DonationRequest
from api.v1.schemas.flutterwave import PaymentDetailsRequest
from api.v1.services.flutterwave import flutterwave_service

flutterwave_donation = APIRouter(prefix="/flutterwave", tags=["Flutterwave"])


@flutterwave_donation.post("/donate")
async def create_donation_session(donation: DonationRequest, request: Request): 
    session_info = await flutterwave_service.initiate_payment(donation.amount, get_user_currency_from_ip(request), donation.email, donation.project_id)
    return success_response(
        200,
        "Payment initiated successfully",
        session_info
    )
    
    
@flutterwave_donation.post("/details")
async def payment_details(payment_details: PaymentDetailsRequest):
    details_response = await flutterwave_service.get_payment_details(payment_details.tx_ref)
    return success_response(
        200,
        "Successfully Retrieved Payment Details",
        details_response
    )

@flutterwave_donation.get("/success")
async def payment_success(
    tx_ref: str = Query(..., alias="tx_ref"),
    status: str = Query(..., alias="status")
) -> success_response:
    """
    Endpoint to handle payment success. Flutterwave will redirect to this URL
    with `tx_ref` and `status` in the query parameters.
    """
    # Call the service to handle the payment success logic
    payment_response = await flutterwave_service.handle_payment_success(tx_ref, status)
    return success_response(
        200,
        "Payment successful",
        payment_response
    )

    
    