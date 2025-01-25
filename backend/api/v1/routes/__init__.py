from fastapi import APIRouter
from api.v1.routes.payment import payment
from api.v1.routes.stripe import stripe_donation
from api.v1.routes.flutterwave import flutterwave_donation
from api.v1.routes.bitpay import bitpay_donation

api_version_one = APIRouter(prefix="/api/v1")

api_version_one.include_router(payment)
api_version_one.include_router(stripe_donation)
api_version_one.include_router(flutterwave_donation)
api_version_one.include_router(bitpay_donation)
