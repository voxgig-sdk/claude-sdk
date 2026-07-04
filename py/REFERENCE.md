# Claude Python SDK Reference

Complete API reference for the Claude Python SDK.


## ClaudeSDK

### Constructor

```python
from claude_sdk import ClaudeSDK

client = ClaudeSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ClaudeSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = ClaudeSDK.test()
```


### Instance Methods

#### `Message(data=None)`

Create a new `MessageEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## MessageEntity

```python
message = client.message
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

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.message.create({
    "max_token": # `$INTEGER`,
    "message": # `$ARRAY`,
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MessageEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = ClaudeSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

