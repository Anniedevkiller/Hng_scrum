#!/usr/bin/env python3

"""Defines base schema"""


from pydantic import BaseModel


class ResponseBase(BaseModel):
    """Defines the base response model"""
    success: bool
    message: str
