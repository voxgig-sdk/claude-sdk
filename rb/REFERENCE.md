# Claude Ruby SDK Reference

Complete API reference for the Claude Ruby SDK.


## ClaudeSDK

### Constructor

```ruby
require_relative 'claude_sdk'

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

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

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

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## MessageEntity

```ruby
message = client.Message
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | ``$ARRAY`` | No |  |
| `id` | ``$STRING`` | No |  |
| `max_token` | ``$INTEGER`` | Yes |  |
| `message` | ``$ARRAY`` | Yes |  |
| `metadata` | ``$OBJECT`` | No |  |
| `model` | ``$STRING`` | No |  |
| `role` | ``$STRING`` | No |  |
| `stop_reason` | ``$STRING`` | No |  |
| `stop_sequence` | ``$STRING`` | No |  |
| `stream` | ``$BOOLEAN`` | No |  |
| `system` | ``$STRING`` | No |  |
| `temperature` | ``$NUMBER`` | No |  |
| `top_k` | ``$INTEGER`` | No |  |
| `top_p` | ``$NUMBER`` | No |  |
| `type` | ``$STRING`` | No |  |
| `usage` | ``$OBJECT`` | No |  |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `content` | - | - | - | - | - |
| `id` | - | - | - | - | - |
| `max_token` | - | - | - | - | - |
| `message` | - | - | - | - | - |
| `metadata` | - | - | - | - | - |
| `model` | - | - | Yes | - | - |
| `role` | - | - | - | - | - |
| `stop_reason` | - | - | - | - | - |
| `stop_sequence` | - | - | - | - | - |
| `stream` | - | - | - | - | - |
| `system` | - | - | - | - | - |
| `temperature` | - | - | - | - | - |
| `top_k` | - | - | - | - | - |
| `top_p` | - | - | - | - | - |
| `type` | - | - | - | - | - |
| `usage` | - | - | - | - | - |

### Operations

#### `create(reqdata, ctrl = nil) -> result, err`

Create a new entity with the given data.

```ruby
result, err = client.Message.create({
  "max_token" => # `$INTEGER`,
  "message" => # `$ARRAY`,
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

