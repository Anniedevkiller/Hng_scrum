import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch
from main import app
import uuid_extensions


TEST_EMAIL="testing@sample.com"

@pytest.fixture()
def client():
    return TestClient(app)


@patch("api.v1.services.newsletter.newsletter_subscription_service.subscribe")
def test_subscribe_newsletter(mock_user, client):
    mock_user.return_value = {
        "status_code": 200,
        "success": True,
        "message": "You have successfully subscribed to our newsletter"
    }

    response = client.post("api/v1/newsletter/subscribe", json={"email": TEST_EMAIL})

    mock_user.assert_called_once_with(TEST_EMAIL)

    assert response.status_code == 200
