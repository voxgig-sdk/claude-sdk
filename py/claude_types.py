# Typed models for the Claude SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class MessageRequired(TypedDict):
    max_token: int
    message: list


class Message(MessageRequired, total=False):
    content: list
    id: str
    metadata: dict
    model: str
    role: str
    stop_reason: str
    stop_sequence: str
    stream: bool
    system: str
    temperature: float
    top_k: int
    top_p: float
    type: str
    usage: dict


class MessageCreateDataRequired(TypedDict):
    max_token: int
    message: list


class MessageCreateData(MessageCreateDataRequired, total=False):
    content: list
    id: str
    metadata: dict
    model: str
    role: str
    stop_reason: str
    stop_sequence: str
    stream: bool
    system: str
    temperature: float
    top_k: int
    top_p: float
    type: str
    usage: dict
