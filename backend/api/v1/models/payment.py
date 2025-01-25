from ..schemas.payment import GateWayEnum, PaymentMethodEnum
from .base_model import BaseTableModel
from sqlalchemy import (
    Column, 
    DECIMAL, 
    Enum, 
    DateTime,
    String
)


class Payment(BaseTableModel):

    """
    Represents a payment record in the system.

    Attributes:
        payment_gateway (GateWayEnum): The gateway used for the payment.
        details (str): Additional details about the payment.
        ref_code (str): Reference code for the payment.
        value_in_usd (decimal.Decimal): The value of the payment in USD.
        amount (decimal.Decimal): The amount of the payment.
        payment_type (PaymentMethodEnum): The type of payment method used.
        currency (str): The currency in which the payment was made.
        created_at (datetime.datetime): The timestamp when the payment was created.
        project (str): The project for which the payment was made.
    """

    __tablename__ = "payments"
    payment_gateway = Column(Enum(GateWayEnum), nullable=False)
    details = Column(String, nullable=False)
    ref_code = Column(String, nullable=False)
    value_in_usd = Column(DECIMAL, nullable=False)
    amount = Column(DECIMAL, nullable=False)
    payment_type = Column(Enum(PaymentMethodEnum), nullable=False)
    currency = Column(String, nullable=False)
    created_at = Column(DateTime, nullable=False)
    project = Column(String, nullable=False)