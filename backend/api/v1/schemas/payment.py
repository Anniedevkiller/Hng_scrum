from pydantic import BaseModel, ConfigDict
from decimal import Decimal
from datetime import datetime
from enum import Enum

# Define Gateway Enum
class GateWayEnum(str, Enum):
    stripe = "stripe"
    flutterwave = "flutterwave"
    bitpay = "bitpay"

# Define Payment Method Enum
class PaymentMethodEnum(str, Enum):
    card = "card"
    bank_transfer = "bank_transfer"
    mobile_money = "mobile_money"

# Payment Model
class Payment(BaseModel):
    payment_gateway: GateWayEnum  # Restrict to valid gateways using the Enum
    details: str  # Add type annotations for details (e.g., could use another model for structured details)
    ref_code: str  # Reference code for the payment
    value_in_usd: Decimal  # Value of payment in USD
    amount: Decimal  # Original amount
    payment_type: PaymentMethodEnum  # Restrict to valid payment methods
    currency: str  # Currency code (e.g., USD, NGN)
    created_at: datetime  # Timestamp for when the payment was created
    project: str # Project
    project_title: str # Title
    

class ProjectPaymentsResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    total_amount: Decimal
    payments: list[Payment]
