// Typed models for the Claude SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Message {
  content?: any[]
  id?: string
  max_token: number
  message: any[]
  metadata?: Record<string, any>
  model?: string
  role?: string
  stop_reason?: string
  stop_sequence?: string
  stream?: boolean
  system?: string
  temperature?: number
  top_k?: number
  top_p?: number
  type?: string
  usage?: Record<string, any>
}

export interface MessageCreateData {
  content?: any[]
  id?: string
  max_token: number
  message: any[]
  metadata?: Record<string, any>
  model?: string
  role?: string
  stop_reason?: string
  stop_sequence?: string
  stream?: boolean
  system?: string
  temperature?: number
  top_k?: number
  top_p?: number
  type?: string
  usage?: Record<string, any>
}

