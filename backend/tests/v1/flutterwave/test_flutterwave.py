import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch
from main import app
from api.v1.schemas.stripe import DonationRequest
from api.v1.schemas.flutterwave import PaymentDetailsRequest


@pytest.fixture()
def client():
    return TestClient(app)


@patch("api.v1.services.flutterwave.flutterwave_service.initiate_payment")
def test_create_donation_session(mock_initiate_payment, client):
    mock_initiate_payment.return_value = {
        "status": "success",
        "data": {
            "payment_url": "https://www.flutterwave.com/payment_url"
        }
    }

    donation_data = {
        "amount": 100.0,
        "email": "donor@example.com",
        "project_id": "resjfsijwhgnsuvniioake"
    }

    response = client.post("api/v1/flutterwave/donate", json=donation_data)

    assert response.status_code == 200
    mock_initiate_payment.assert_called_once_with(100.0, "USD", "donor@example.com", "resjfsijwhgnsuvniioake")


@patch("api.v1.services.flutterwave.flutterwave_service.get_payment_details")
def test_payment_details(mock_get_payment_details, client):
    mock_get_payment_details.return_value = {
        "status": "success",
        "data": {
            "tx_ref": "tx12345",
            "amount": 100.0,
            "status": "successful"
        }
    }

    payment_data = {
        "tx_ref": "tx12345"
    }

    response = client.post("api/v1/flutterwave/details", json=payment_data)

    assert response.status_code == 200
    mock_get_payment_details.assert_called_once_with("tx12345")


@patch("api.v1.services.flutterwave.flutterwave_service.handle_payment_success")
def test_payment_success(mock_handle_payment_success, client):
    mock_handle_payment_success.return_value = {
        "status": "success",
        "message": "Payment verified successfully"
    }

    response = client.get("api/v1/flutterwave/success?tx_ref=tx12345&status=successful")

    assert response.status_code == 200
    mock_handle_payment_success.assert_called_once_with("tx12345", "successful")
