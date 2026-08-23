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
| `content` | `any[]` | No | Array of content blocks in the response |
| `id` | `string` | No | Unique identifier for the message |
| `max_tokens` | `number` | Yes | Maximum number of tokens to generate in the response |
| `messages` | `any[]` | Yes | Array of message objects representing the conversation history |
| `metadata` | `Record<string, any>` | No | Metadata about the request |
| `model` | `string` | No | The model used to generate the response |
| `role` | `string` | No | The role of the response sender |
| `stop_reason` | `string` | No | Reason why the model stopped generating |
| `stop_sequence` | `string` | No | The stop sequence that caused generation to stop, if applicable |
| `stop_sequences` | `any[]` | No | Custom stop sequences to end generation |
| `stream` | `boolean` | No | Whether to stream the response incrementally |
| `system` | `string` | No | System prompt to set the context and behavior for Claude |
| `temperature` | `number` | No | Sampling temperature (0.0 to 1.0). |
| `top_k` | `number` | No | Only sample from the top K options for each subsequent token |
| `top_p` | `number` | No | Nucleus sampling parameter. |
| `type` | `string` | No | Object type |
| `usage` | `Record<string, any>` | No | Token usage information |

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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Message().create({
  max_tokens: 1,
  messages: [],
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

