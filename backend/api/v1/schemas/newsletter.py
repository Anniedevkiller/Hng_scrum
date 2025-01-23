from pydantic import BaseModel, Field

class NewsletterSchema(BaseModel):
    email: str = Field(pattern=r"[^@]+@[^@]+\.[^@]+")
