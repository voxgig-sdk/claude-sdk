# frozen_string_literal: true

# Typed models for the Claude SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Message entity data model.
#
# @!attribute [rw] content
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] max_token
#   @return [Integer]
#
# @!attribute [rw] message
#   @return [Array]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] stop_reason
#   @return [String, nil]
#
# @!attribute [rw] stop_sequence
#   @return [String, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] system
#   @return [String, nil]
#
# @!attribute [rw] temperature
#   @return [Float, nil]
#
# @!attribute [rw] top_k
#   @return [Integer, nil]
#
# @!attribute [rw] top_p
#   @return [Float, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
Message = Struct.new(
  :content,
  :id,
  :max_token,
  :message,
  :metadata,
  :model,
  :role,
  :stop_reason,
  :stop_sequence,
  :stream,
  :system,
  :temperature,
  :top_k,
  :top_p,
  :type,
  :usage,
  keyword_init: true
)

# Match filter for Message#create (any subset of Message fields).
#
# @!attribute [rw] content
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] max_token
#   @return [Integer, nil]
#
# @!attribute [rw] message
#   @return [Array, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] model
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] stop_reason
#   @return [String, nil]
#
# @!attribute [rw] stop_sequence
#   @return [String, nil]
#
# @!attribute [rw] stream
#   @return [Boolean, nil]
#
# @!attribute [rw] system
#   @return [String, nil]
#
# @!attribute [rw] temperature
#   @return [Float, nil]
#
# @!attribute [rw] top_k
#   @return [Integer, nil]
#
# @!attribute [rw] top_p
#   @return [Float, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] usage
#   @return [Hash, nil]
MessageCreateData = Struct.new(
  :content,
  :id,
  :max_token,
  :message,
  :metadata,
  :model,
  :role,
  :stop_reason,
  :stop_sequence,
  :stream,
  :system,
  :temperature,
  :top_k,
  :top_p,
  :type,
  :usage,
  keyword_init: true
)

