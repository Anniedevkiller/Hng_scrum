from pydantic import BaseModel

class NewsletterSchema(BaseModel):
    email: str
