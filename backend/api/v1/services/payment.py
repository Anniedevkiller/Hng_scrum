from api.v1.models.payment import Payment
from api.v1.schemas.payment import Payment as PaymentSchema
from fastapi import HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError


class PaymentService:
    def log_payment(self, db: Session, payment: PaymentSchema):
        """
        Log payment details to the database.
        """
        try:
            payment = Payment(
                payment_gateway=payment.payment_gateway,
                details=payment.details,
                ref_code=payment.ref_code,
                value_in_usd=payment.value_in_usd,
                amount=payment.amount,
                payment_type=payment.payment_type,
                currency=payment.currency,
                created_at=payment.created_at,
                project=payment.project
            )

            db.add(payment)
            db.commit()
            db.refresh(payment)

            return payment

        except SQLAlchemyError:
            db.rollback()
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="A database error occurred while logging payment.",
            )

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"An error occurred while logging payment: {str(e)}",
            )

    def get_payment_logs(self, db: Session):
        """
        Get all payment logs from the database.
        """
        try:
            return db.query(Payment).all()

        except SQLAlchemyError:
            db.rollback()
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="A database error occurred while fetching payment logs.",
            )

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"An error occurred while fetching payment logs: {str(e)}",
            )
        
    def get_project_payments(self, db: Session, project_id: str):
        """
        Get all payments for a specific supported project.
        """
        try:
            return db.query(Payment).filter(Payment.supported_project == project_id).all()
        
        except SQLAlchemyError:
            db.rollback()
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="A database error occurred while fetching project payments."
            )
        
        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"An error occurred while fetching project payments: {str(e)}"
            )



payment_service = PaymentService()
