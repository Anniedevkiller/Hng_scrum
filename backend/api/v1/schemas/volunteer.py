from pydantic import BaseModel, field_validator
import re

class VolunteerSchema(BaseModel):
    name: str
    address: str
    phone_no: str
    email: str
    gender: str = "Male" | "Female"
    area_of_interest: str

    @field_validator("email", mode="after")
    def validate_email(cls, value):
        if not re.match(r"[^@]+@[^@]+\.[^@]+", value):
            raise ValueError("Invalid email address")
        return value
    

    @field_validator("phone_no", mode="after")
    def validate_phoneno(cls, value):
        if len(value) < 12:
            raise ValueError("Invalid phone no")
        return value
