import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch
from main import app
from api.v1.schemas.stripe import DonationRequest


@pytest.fixture()
def client():
    return TestClient(app)


@patch("api.v1.services.stripe_service.create_checkout_session")
def test_create_donation_session(mock_create_checkout_session, client):
    mock_create_checkout_session.return_value = {
        "checkout_url": "https://checkout.stripe.com/session/test",
        "session_id": "cs_test_a1b2c3d4",
    }

    donation_data = {
        "amount": 10.0,
        "email": "donor@example.com",
        "project_id": "5531886652142950",
        "currency": "USD",
    }
    response = client.post("/api/v1/stripe/donate", json=donation_data)

    assert response.status_code == 200
    assert response.json()["data"]["checkout_url"] == "https://checkout.stripe.com/session/test"

    mock_create_checkout_session.assert_called_once_with(
        10.0, "USD", "donor@example.com", "5531886652142950"
    )


@patch("api.v1.services.stripe_service.handle_success")
def test_payment_success(mock_handle_success, client):
    mock_handle_success.return_value = {
        "status": "success",
        "customer_email": "test@example.com",
        "amount_total": 100.0,
    }

    session_id = "cs_test_a1b2c3d4"
    response = client.get(f"/api/v1/stripe/success?session_id={session_id}")

    assert response.status_code == 200

    mock_handle_success.assert_called_once_with(session_id)



@patch("api.utils.success_response")
def test_payment_cancel(mock_success_response, client):
    mock_success_response.return_value = {
        "status_code": 200,
        "message": "Donation process canceled.",
        "data": None,
    }

    response = client.get("/api/v1/stripe/cancel")

    assert response.status_code == 200
    