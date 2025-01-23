from fastapi import APIRouter
from api.v1.services.newsletter import newsletter_subscription_service
from api.v1.schemas.newsletter import NewsletterSchema
from api.utils.response import success_response


newsletter = APIRouter(prefix="/newsletter", tags=["Newsletter"]) 

@newsletter.post("/subscribe")
async def subscribe(newsletter: NewsletterSchema):
    newsletter_subscription_service.subscribe(newsletter.email)
    return success_response(
        200,
        "You have successfully subscribed to our newsletter",
    )
