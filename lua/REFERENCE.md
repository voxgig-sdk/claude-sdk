# Claude Lua SDK Reference

Complete API reference for the Claude Lua SDK.


## ClaudeSDK

### Constructor

```lua
local sdk = require("claude_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts, sdkopts)`

Create a test client with mock features active. Both arguments may be `nil`.

```lua
local client = sdk.test(nil, nil)
```


### Instance Methods

#### `Message(data)`

Create a new `Message` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## MessageEntity

```lua
local message = client:Message(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Message(nil):create({
  max_token = --[[ `$INTEGER` ]],
  message = --[[ `$ARRAY` ]],
}, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

