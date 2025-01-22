import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch
from main import app
import uuid_extensions


PAYMENT_ID = str(uuid_extensions.uuid7())

@pytest.fixture()
def client():
    return TestClient(app)


@patch("api.v1.services.payment.payment_service.log_payment")
def test_create_donation_session(mock_payment, client):
    mock_payment.return_value = {
        "total_amount": "0",
        "payments": []
    }

    response = client.get(f"api/v1/payments/{PAYMENT_ID}")

    assert response.status_code == 200
