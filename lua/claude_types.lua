-- Typed models for the Claude SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Message
---@field content? table
---@field id? string
---@field max_token number
---@field message table
---@field metadata? table
---@field model? string
---@field role? string
---@field stop_reason? string
---@field stop_sequence? string
---@field stream? boolean
---@field system? string
---@field temperature? number
---@field top_k? number
---@field top_p? number
---@field type? string
---@field usage? table

---@class MessageCreateData

local M = {}

return M
