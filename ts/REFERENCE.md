# Claude TypeScript SDK Reference

Complete API reference for the Claude TypeScript SDK.


## ClaudeSDK

### Constructor

```ts
new ClaudeSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `ClaudeSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = ClaudeSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `ClaudeSDK` instance in test mode.


### Instance Methods

#### `Message(data?: object)`

Create a new `Message` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `MessageEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `ClaudeSDK.test()`.

**Returns:** `ClaudeSDK` instance in test mode.


---

## MessageEntity

```ts
const message = client.Message()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Message().create({
  max_token: /* `$INTEGER` */,
  message: /* `$ARRAY` */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `MessageEntity` instance with the same client and
options.

#### `client()`

Return the parent `ClaudeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new ClaudeSDK({
  feature: {
    test: { active: true },
  }
})
```

