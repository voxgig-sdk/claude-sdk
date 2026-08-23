# Claude PHP SDK Reference

Complete API reference for the Claude PHP SDK.


## ClaudeSDK

### Constructor

```php
require_once __DIR__ . '/claude_sdk.php';

$client = new ClaudeSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ClaudeSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = ClaudeSDK::test();
```


### Instance Methods

#### `Message($data = null)`

Create a new `MessageEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): ClaudeUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## MessageEntity

```php
$message = $client->Message();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `content` | `array` | No | Array of content blocks in the response |
| `id` | `string` | No | Unique identifier for the message |
| `max_tokens` | `int` | Yes | Maximum number of tokens to generate in the response |
| `messages` | `array` | Yes | Array of message objects representing the conversation history |
| `metadata` | `array` | No | Metadata about the request |
| `model` | `string` | No | The model used to generate the response |
| `role` | `string` | No | The role of the response sender |
| `stop_reason` | `string` | No | Reason why the model stopped generating |
| `stop_sequence` | `string` | No | The stop sequence that caused generation to stop, if applicable |
| `stop_sequences` | `array` | No | Custom stop sequences to end generation |
| `stream` | `bool` | No | Whether to stream the response incrementally |
| `system` | `string` | No | System prompt to set the context and behavior for Claude |
| `temperature` | `float` | No | Sampling temperature (0.0 to 1.0). |
| `top_k` | `int` | No | Only sample from the top K options for each subsequent token |
| `top_p` | `float` | No | Nucleus sampling parameter. |
| `type` | `string` | No | Object type |
| `usage` | `array` | No | Token usage information |

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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Message()->create([
  "max_tokens" => null, // int
  "messages" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MessageEntity`

Create a new `MessageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new ClaudeSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

