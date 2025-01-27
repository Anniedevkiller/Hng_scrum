import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch
from main import app


@pytest.fixture()
def client():
    return TestClient(app)


@patch("api.v1.services.newsletter.newsletter_subscription_service.subscribe")
def test_subscribe_newsletter(mock_volunteer, client):
    mock_volunteer.return_value = {
        "status_code": 200,
        "success": True,
        "message": "Your request was submitted successfully.",
    }

    response = client.post(
        "api/v1/volunteer/register",
        json={
            "name": "Jane Doe",
            "address": "789 Oak Lane, Riverdale",
            "phone_no": "+447700900123",
            "email": "jane.doe@example.com",
            "gender": "Female",
            "area_of_interest": "Work",
        },
    )

    assert response.status_code == 200
