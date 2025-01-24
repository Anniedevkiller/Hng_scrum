from fastapi import APIRouter
from api.v1.schemas.volunteer import VolunteerSchema
from api.v1.services.volunteer import volunteer_service
from api.utils.response import success_response

volunteer = APIRouter(prefix="/volunteer", tags=["Volunteer"])


@volunteer.post("/register")
async def register_volunteer(volunteer: VolunteerSchema):
    volunteer_service.submit(
        volunteer.name,
        volunteer.address,
        volunteer.phone_no,
        volunteer.email,
        volunteer.gender,
        volunteer.area_of_interest,
    )
    return success_response(
        200,
        "Your request was submitted successfully."
    )
