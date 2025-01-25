from pydantic import BaseModel


class PaymentDetailsRequest(BaseModel):
    tx_ref: str
