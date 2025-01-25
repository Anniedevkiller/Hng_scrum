from pydantic import BaseModel, field_validator, Field
from typing import Literal
import re

class VolunteerSchema(BaseModel):
    name: str
    address: str
    phone_no: str = Field(min_length=9, max_length=14)
    email: str
    gender: Literal["Male", "Female"]
    area_of_interest: str

    @field_validator("email", mode="after")
    def validate_email(cls, value):
        if not re.match(r"[^@]+@[^@]+\.[^@]+", value):
            raise ValueError("Invalid email address")
        return value

