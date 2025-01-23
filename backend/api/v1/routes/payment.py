from fastapi import APIRouter, Depends
from api.v1.services.payment import payment_service
from api.v1.schemas.payment import ProjectPaymentsResponse
from api.db.database import get_db 
from sqlalchemy.orm import Session


payment = APIRouter(prefix="/payments", tags=["Payments"])

@payment.get("/{payment_id}", response_model=ProjectPaymentsResponse)
async def get_payment(payment_id: str, db: Session = Depends(get_db)):
    payments = payment_service.get_project_payments(db, payment_id)
    total_amount = sum([payment.amount for payment in payments])
    return {"total_amount": total_amount, "payments": payments}