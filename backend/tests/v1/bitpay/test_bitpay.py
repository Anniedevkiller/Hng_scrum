#!/usr/bin/env python3
"""Unittest for bitpay donations"""
from fastapi import status
import pytest
from fastapi.testclient import TestClient
from unittest.mock import Mock, patch

from api.v1.routes import bitpay_donation
from api.v1.schemas.bitpay import CreateInvoice

client = TestClient(bitpay_donation)

@pytest.fixture
def mock_create_invoice():
    """
    Mock the bitpay service's create_invoice function.
    """
    with patch("api.v1.services.bitpay_service.create_invoice") as mock:
        invoice_mock = Mock()
        invoice_mock.url = "https://test.bitpay.com/invoice/invoice-id"
        mock.return_value = invoice_mock
        yield mock

@pytest.fixture
def mock_get_invoice():
    """
    Mock get invoice by id
    """
    with patch("api.v1.services.bitpay_service.get_invoice") as mock:
        invoice_mock = Mock()
        invoice_mock.status = "completed"
        invoice_mock.currency = "NGN"
        invoice_mock.display_amount_paid = "1"
        mock.return_value = invoice_mock
        yield mock


@pytest.fixture
def mock_get_current_user_currency():
    """
    Mock the get_user_currency_from_ip function.
    """
    with patch("api.utils.ip.get_user_currency_from_ip") as mock_get_currency:
        with patch("requests.get") as mock_get:
            mock_response = Mock()
            mock_response.json.return_value = {"country": "US"}
            mock_get.return_value = mock_response
            mock_get_currency.return_value = "USD"
            yield mock_get_currency


def test_create_invoice(mock_create_invoice, mock_get_current_user_currency):
    """Test create invoice"""
    payload = {
        "amount": 20,
        "email": "donor@example.com",
    }

    response = client.post("/bitpay", json=payload)
    assert response.status_code == 200
    mock_create_invoice.assert_called_once_with(
        CreateInvoice(amount=20, email="donor@example.com"), "USD")


def test_retrieve_invoice(mock_get_invoice):
    """Test retrieve invoice by id"""
    url = "/bitpay/success?invoice_id=invoice-id"

    response = client.get(url)

    assert response.status_code == 200

    data = response.json()["data"]

    assert data["amount_paid_usd"] == "1"
    assert data["status"] == "completed"
    assert data["currency_paid"] == "NGN"
    mock_get_invoice.assert_called_once_with(
        "invoice-id"
    )
