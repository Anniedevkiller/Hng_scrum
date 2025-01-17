from pydantic import BaseModel, PositiveFloat , EmailStr


class DonationRequest(BaseModel):
    amount: PositiveFloat
    email: EmailStr
