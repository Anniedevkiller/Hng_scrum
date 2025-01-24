from fastapi import APIRouter

volunteer = APIRouter(prefix="/volunteer", tags=["Volunteer"])

@volunteer.post("/register")
async def register_volunteer():
    return {"message": "Volunteer registered successfully"}