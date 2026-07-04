# Typed models for the Claude SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Message:
    max_token: int
    message: list
    content: Optional[list] = None
    id: Optional[str] = None
    metadata: Optional[dict] = None
    model: Optional[str] = None
    role: Optional[str] = None
    stop_reason: Optional[str] = None
    stop_sequence: Optional[str] = None
    stream: Optional[bool] = None
    system: Optional[str] = None
    temperature: Optional[float] = None
    top_k: Optional[int] = None
    top_p: Optional[float] = None
    type: Optional[str] = None
    usage: Optional[dict] = None


@dataclass
class MessageCreateData:
    content: Optional[list] = None
    id: Optional[str] = None
    max_token: Optional[int] = None
    message: Optional[list] = None
    metadata: Optional[dict] = None
    model: Optional[str] = None
    role: Optional[str] = None
    stop_reason: Optional[str] = None
    stop_sequence: Optional[str] = None
    stream: Optional[bool] = None
    system: Optional[str] = None
    temperature: Optional[float] = None
    top_k: Optional[int] = None
    top_p: Optional[float] = None
    type: Optional[str] = None
    usage: Optional[dict] = None

