#!/usr/bin/env python3

"""Bitpay API donation routes"""


from fastapi import APIRouter, Query, Request, status
from api.utils.ip import get_user_currency_from_ip

from api.utils.response import success_response
from api.v1.schemas.bitpay import CreateInvoice, CreateInvoiceResponse, RetrieveInvoiceResponse
from api.v1.services.bitpay import bitpay_service

bitpay_donation = APIRouter(prefix="/bitpay", tags=["Bitpay", "Donation"])


@bitpay_donation.post(
    "",
    response_model=CreateInvoiceResponse,
    status_code=status.HTTP_200_OK
)
def create_invoice(req: CreateInvoice, request: Request):
    """Create a Bitpay invoice

    Args:
        req (CreateInvoice): The request body
        request (Request): The request object
    Returns:
        JSON: The response object
    """
    try:
        invoice = bitpay_service.create_invoice(
            req,
            get_user_currency_from_ip(request)
        )

        return success_response(
            status_code=status.HTTP_200_OK,
            message="Invoice created successfully",
            data={
                "donation_url": invoice.url
            }
        )
    except Exception as e:
        return success_response(
            status_code=status.HTTP_400_BAD_REQUEST,
            message=str(e)
        )

@bitpay_donation.get(
    "/success",
    status_code=status.HTTP_200_OK,
    response_model=RetrieveInvoiceResponse
)
def donation_success(invoice_id: str = Query(..., alias="invoice_id")):
    """Get the status of an invoice and the amount paid
    """
    try:
        invoice = bitpay_service.get_invoice(invoice_id)

        print(invoice.display_amount_paid)
        return success_response(
            status_code=status.HTTP_200_OK,
            message="Invoice retrieved successfully",
            data={
                "status": invoice.status,
                "amount_paid_usd": invoice.display_amount_paid,
                "currency_paid": invoice.currency,
            }
        )
    except Exception as e:
        return success_response(
            status_code=status.HTTP_400_BAD_REQUEST,
            message=str(e)
        )
