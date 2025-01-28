from pydantic import BaseModel, field_validator
import re

class NewsletterSchema(BaseModel):
    email: str

    @field_validator("email", mode="after")
    def validate_email(cls, value):
        if not re.match(r"[^@]+@[^@]+\.[^@]+", value):
            raise ValueError("Invalid email address")
        return value
