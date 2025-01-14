#!/usr/bin/env python3


from pydantic import BaseModel, EmailStr, PositiveFloat
from api.v1.schemas.base_schema import ResponseBase


class CreateInvoice(BaseModel):
    """Create invoice input"""
    amount: PositiveFloat
    email: EmailStr


class CreateInvoiceResponse(ResponseBase):
    """Create payment response model"""
    data: str

class RetrieveInvoiceResponse(ResponseBase):
    """Retrieve payment response model"""
    data: dict
