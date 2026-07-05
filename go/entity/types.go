// Typed models for the Claude SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Message is the typed data model for the message entity.
type Message struct {
	Content *[]any `json:"content,omitempty"`
	Id *string `json:"id,omitempty"`
	MaxToken int `json:"max_token"`
	Message []any `json:"message"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Model *string `json:"model,omitempty"`
	Role *string `json:"role,omitempty"`
	StopReason *string `json:"stop_reason,omitempty"`
	StopSequence *string `json:"stop_sequence,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	System *string `json:"system,omitempty"`
	Temperature *float64 `json:"temperature,omitempty"`
	TopK *int `json:"top_k,omitempty"`
	TopP *float64 `json:"top_p,omitempty"`
	Type *string `json:"type,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
}

// MessageCreateData is the typed request payload for Message.CreateTyped.
type MessageCreateData struct {
	Content *[]any `json:"content,omitempty"`
	Id *string `json:"id,omitempty"`
	MaxToken int `json:"max_token"`
	Message []any `json:"message"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Model *string `json:"model,omitempty"`
	Role *string `json:"role,omitempty"`
	StopReason *string `json:"stop_reason,omitempty"`
	StopSequence *string `json:"stop_sequence,omitempty"`
	Stream *bool `json:"stream,omitempty"`
	System *string `json:"system,omitempty"`
	Temperature *float64 `json:"temperature,omitempty"`
	TopK *int `json:"top_k,omitempty"`
	TopP *float64 `json:"top_p,omitempty"`
	Type *string `json:"type,omitempty"`
	Usage *map[string]any `json:"usage,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
