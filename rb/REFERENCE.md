# Claude Ruby SDK Reference

Complete API reference for the Claude Ruby SDK.


## ClaudeSDK

### Constructor

```ruby
require_relative 'Claude_sdk'

client = ClaudeSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ClaudeSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = ClaudeSDK.test
```


### Instance Methods

#### `Message(data = nil)`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## MessageEntity

```ruby
message = client.Message
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `Array` | No | Array of content blocks in the response |
| `id` | `String` | No | Unique identifier for the message |
| `max_tokens` | `Integer` | Yes | Maximum number of tokens to generate in the response |
| `messages` | `Array` | Yes | Array of message objects representing the conversation history |
| `metadata` | `Hash` | No | Metadata about the request |
| `model` | `String` | No | The model used to generate the response |
| `role` | `String` | No | The role of the response sender |
| `stop_reason` | `String` | No | Reason why the model stopped generating |
| `stop_sequence` | `String` | No | The stop sequence that caused generation to stop, if applicable |
| `stop_sequences` | `Array` | No | Custom stop sequences to end generation |
| `stream` | `Boolean` | No | Whether to stream the response incrementally |
| `system` | `String` | No | System prompt to set the context and behavior for Claude |
| `temperature` | `Float` | No | Sampling temperature (0.0 to 1.0). |
| `top_k` | `Integer` | No | Only sample from the top K options for each subsequent token |
| `top_p` | `Float` | No | Nucleus sampling parameter. |
| `type` | `String` | No | Object type |
| `usage` | `Hash` | No | Token usage information |

### Field Usage by Operation

| Field | create |
| --- | --- |
| `content` | - |
| `id` | - |
| `max_tokens` | - |
| `messages` | - |
| `metadata` | - |
| `model` | Yes |
| `role` | - |
| `stop_reason` | - |
| `stop_sequence` | - |
| `stop_sequences` | - |
| `stream` | - |
| `system` | - |
| `temperature` | - |
| `top_k` | - |
| `top_p` | - |
| `type` | - |
| `usage` | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Message.create({
  "max_tokens" => 1, # Integer
  "messages" => [], # Array
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = ClaudeSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

