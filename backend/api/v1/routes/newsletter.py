from fastapi import APIRouter, Depends, HTTPException


newsletter = APIRouter(prefix="/newsletter", tags=["Newsletter"]) 

@newsletter.post("/subscribe")
async def subscribe():
    return {"message": "Subscribed successfully!"}