package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Claude",
			"slug": "claude",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://api.anthropic.com/v1",
			"auth": map[string]any{
				"prefix": "",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"message": map[string]any{},
			},
		},
		"entity": map[string]any{
			"message": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "content",
						"short": "Array of content blocks in the response",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the message",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "max_tokens",
						"req": true,
						"short": "Maximum number of tokens to generate in the response",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "messages",
						"req": true,
						"short": "Array of message objects representing the conversation history",
						"type": "`$ARRAY`",
						"union": map[string]any{
							"branches": 2,
							"count": 1,
							"depth": 3,
						},
					},
					map[string]any{
						"name": "metadata",
						"short": "Metadata about the request",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "model",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "The model used to generate the response",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "role",
						"short": "The role of the response sender",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stop_reason",
						"short": "Reason why the model stopped generating",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stop_sequence",
						"short": "The stop sequence that caused generation to stop, if applicable",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "stop_sequences",
						"short": "Custom stop sequences to end generation",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "stream",
						"short": "Whether to stream the response incrementally",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "system",
						"short": "System prompt to set the context and behavior for Claude",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "temperature",
						"short": "Sampling temperature (0.0 to 1.0).",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "top_k",
						"short": "Only sample from the top K options for each subsequent token",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "top_p",
						"short": "Nucleus sampling parameter.",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "type",
						"short": "Object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "usage",
						"short": "Token usage information",
						"type": "`$OBJECT`",
					},
				},
				"name": "message",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/messages",
								"parts": []any{
									"messages",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
