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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api.anthropic.com/v1",
			"auth": map[string]any{
				"prefix": "",
				"name": "x-api-key",
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
				"id": map[string]any{
					"field": "id",
					"name": "id",
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
								"segments": []any{
									map[string]any{
										"lit": "messages",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"messages",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
