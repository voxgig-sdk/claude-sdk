

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { ClaudeSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('MessageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLAUDE_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLAUDE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = ClaudeSDK.test()
    const ent = testsdk.Message()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLAUDE_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'message.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"content","req":false,"short":"Array of content blocks in the response","type":"`$ARRAY`","index$":0},{"active":true,"name":"id","req":false,"short":"Unique identifier for the message","type":"`$STRING`","index$":1},{"active":true,"name":"max_tokens","req":true,"short":"Maximum number of tokens to generate in the response","type":"`$INTEGER`","index$":2},{"active":true,"name":"messages","req":true,"short":"Array of message objects representing the conversation history","type":"`$ARRAY`","union":{"branches":2,"count":1,"depth":3},"index$":3},{"active":true,"name":"metadata","req":false,"short":"Metadata about the request","type":"`$OBJECT`","index$":4},{"active":true,"name":"model","op":{"create":{"req":true,"type":"`$STRING`"}},"req":false,"short":"The model used to generate the response","type":"`$STRING`","index$":5},{"active":true,"name":"role","req":false,"short":"The role of the response sender","type":"`$STRING`","index$":6},{"active":true,"name":"stop_reason","req":false,"short":"Reason why the model stopped generating","type":"`$STRING`","index$":7},{"active":true,"name":"stop_sequence","req":false,"short":"The stop sequence that caused generation to stop, if applicable","type":"`$STRING`","index$":8},{"active":true,"name":"stop_sequences","req":false,"short":"Custom stop sequences to end generation","type":"`$ARRAY`","index$":9},{"active":true,"name":"stream","req":false,"short":"Whether to stream the response incrementally","type":"`$BOOLEAN`","index$":10},{"active":true,"name":"system","req":false,"short":"System prompt to set the context and behavior for Claude","type":"`$STRING`","index$":11},{"active":true,"name":"temperature","req":false,"short":"Sampling temperature (0.0 to 1.0).","type":"`$NUMBER`","index$":12},{"active":true,"name":"top_k","req":false,"short":"Only sample from the top K options for each subsequent token","type":"`$INTEGER`","index$":13},{"active":true,"name":"top_p","req":false,"short":"Nucleus sampling parameter.","type":"`$NUMBER`","index$":14},{"active":true,"name":"type","req":false,"short":"Object type","type":"`$STRING`","index$":15},{"active":true,"name":"usage","req":false,"short":"Token usage information","type":"`$OBJECT`","index$":16}],"id":{"field":"id","name":"id"},"name":"message","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /messages","json":"{\"operationId\":\"createMessage\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"examples\":{\"simple\":{\"summary\":\"Simple message\",\"value\":{\"max_tokens\":1024,\"messages\":[{\"content\":\"Hello, Claude!\",\"role\":\"user\"}],\"model\":\"claude-3-5-sonnet-20241022\"}},\"withSystem\":{\"summary\":\"Message with system prompt\",\"value\":{\"max_tokens\":2048,\"messages\":[{\"content\":\"Write a Python function to calculate fibonacci numbers.\",\"role\":\"user\"}],\"model\":\"claude-3-opus-20240229\",\"system\":\"You are a helpful coding assistant.\"}}},\"schema\":{\"properties\":{\"max_tokens\":{\"description\":\"Maximum number of tokens to generate in the response\",\"example\":1024,\"maximum\":4096,\"minimum\":1,\"type\":\"integer\"},\"messages\":{\"description\":\"Array of message objects representing the conversation history\",\"items\":{\"properties\":{\"content\":{\"description\":\"The content of the message\",\"example\":\"Hello, Claude!\",\"oneOf\":[{\"type\":\"string\"},{\"items\":{\"properties\":{\"source\":{\"description\":\"Image source (for image type)\",\"properties\":{\"data\":{\"description\":\"Base64-encoded image data\",\"type\":\"string\"},\"media_type\":{\"description\":\"MIME type of the image\",\"enum\":[\"image/jpeg\",\"image/png\",\"image/gif\",\"image/webp\"],\"type\":\"string\"},\"type\":{\"description\":\"Source type\",\"enum\":[\"base64\"],\"type\":\"string\"}},\"type\":\"object\"},\"text\":{\"description\":\"Text content (for text type)\",\"type\":\"string\"},\"type\":{\"description\":\"The type of content block\",\"enum\":[\"text\",\"image\"],\"type\":\"string\"}},\"required\":[\"type\"],\"type\":\"object\"},\"type\":\"array\"}]},\"role\":{\"description\":\"The role of the message sender\",\"enum\":[\"user\",\"assistant\"],\"example\":\"user\",\"type\":\"string\"}},\"required\":[\"role\",\"content\"],\"type\":\"object\"},\"minItems\":1,\"type\":\"array\"},\"metadata\":{\"description\":\"Metadata about the request\",\"properties\":{\"user_id\":{\"description\":\"Identifier for the end user\",\"type\":\"string\"}},\"type\":\"object\"},\"model\":{\"description\":\"The model to use for generating responses\",\"enum\":[\"claude-3-5-sonnet-20241022\",\"claude-3-5-haiku-20241022\",\"claude-3-opus-20240229\",\"claude-3-sonnet-20240229\",\"claude-3-haiku-20240307\"],\"example\":\"claude-3-5-sonnet-20241022\",\"type\":\"string\"},\"stop_sequences\":{\"description\":\"Custom stop sequences to end generation\",\"example\":[\"\\n\\nHuman:\"],\"items\":{\"type\":\"string\"},\"maxItems\":4,\"type\":\"array\"},\"stream\":{\"default\":false,\"description\":\"Whether to stream the response incrementally\",\"example\":false,\"type\":\"boolean\"},\"system\":{\"description\":\"System prompt to set the context and behavior for Claude\",\"example\":\"You are a helpful assistant.\",\"type\":\"string\"},\"temperature\":{\"default\":1,\"description\":\"Sampling temperature (0.0 to 1.0). Higher values make output more random\",\"example\":0.7,\"maximum\":1,\"minimum\":0,\"type\":\"number\"},\"top_k\":{\"description\":\"Only sample from the top K options for each subsequent token\",\"example\":40,\"minimum\":0,\"type\":\"integer\"},\"top_p\":{\"description\":\"Nucleus sampling parameter. Alternative to temperature\",\"example\":0.9,\"maximum\":1,\"minimum\":0,\"type\":\"number\"}},\"required\":[\"model\",\"max_tokens\",\"messages\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"success\":{\"summary\":\"Successful message response\",\"value\":{\"content\":[{\"text\":\"Hello! How can I assist you today?\",\"type\":\"text\"}],\"id\":\"msg_01XFDUDYJgAACzvnptvVoYEL\",\"model\":\"claude-3-5-sonnet-20241022\",\"role\":\"assistant\",\"stop_reason\":\"end_turn\",\"stop_sequence\":null,\"type\":\"message\",\"usage\":{\"input_tokens\":12,\"output_tokens\":25}}}},\"schema\":{\"properties\":{\"content\":{\"description\":\"Array of content blocks in the response\",\"items\":{\"properties\":{\"text\":{\"description\":\"The text content\",\"example\":\"Hello! How can I assist you today?\",\"type\":\"string\"},\"type\":{\"description\":\"The type of content block\",\"enum\":[\"text\"],\"example\":\"text\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"description\":\"Unique identifier for the message\",\"example\":\"msg_01XFDUDYJgAACzvnptvVoYEL\",\"type\":\"string\"},\"model\":{\"description\":\"The model used to generate the response\",\"example\":\"claude-3-5-sonnet-20241022\",\"type\":\"string\"},\"role\":{\"description\":\"The role of the response sender\",\"enum\":[\"assistant\"],\"example\":\"assistant\",\"type\":\"string\"},\"stop_reason\":{\"description\":\"Reason why the model stopped generating\",\"enum\":[\"end_turn\",\"max_tokens\",\"stop_sequence\"],\"example\":\"end_turn\",\"type\":\"string\"},\"stop_sequence\":{\"description\":\"The stop sequence that caused generation to stop, if applicable\",\"example\":null,\"nullable\":true,\"type\":\"string\"},\"type\":{\"description\":\"Object type\",\"enum\":[\"message\"],\"example\":\"message\",\"type\":\"string\"},\"usage\":{\"description\":\"Token usage information\",\"properties\":{\"input_tokens\":{\"description\":\"Number of tokens in the input\",\"example\":12,\"type\":\"integer\"},\"output_tokens\":{\"description\":\"Number of tokens in the output\",\"example\":25,\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with message completion\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"message\":{\"description\":\"Human-readable error message\",\"example\":\"Invalid API key provided\",\"type\":\"string\"},\"type\":{\"description\":\"Error type\",\"example\":\"invalid_request_error\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"Object type\",\"enum\":[\"error\"],\"example\":\"error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad request - Invalid input parameters\"},\"401\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"message\":{\"description\":\"Human-readable error message\",\"example\":\"Invalid API key provided\",\"type\":\"string\"},\"type\":{\"description\":\"Error type\",\"example\":\"invalid_request_error\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"Object type\",\"enum\":[\"error\"],\"example\":\"error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Unauthorized - Invalid or missing API key\"},\"403\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"message\":{\"description\":\"Human-readable error message\",\"example\":\"Invalid API key provided\",\"type\":\"string\"},\"type\":{\"description\":\"Error type\",\"example\":\"invalid_request_error\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"Object type\",\"enum\":[\"error\"],\"example\":\"error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Forbidden - Insufficient permissions\"},\"429\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"message\":{\"description\":\"Human-readable error message\",\"example\":\"Invalid API key provided\",\"type\":\"string\"},\"type\":{\"description\":\"Error type\",\"example\":\"invalid_request_error\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"Object type\",\"enum\":[\"error\"],\"example\":\"error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Rate limit exceeded\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"properties\":{\"message\":{\"description\":\"Human-readable error message\",\"example\":\"Invalid API key provided\",\"type\":\"string\"},\"type\":{\"description\":\"Error type\",\"example\":\"invalid_request_error\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":{\"description\":\"Object type\",\"enum\":[\"error\"],\"example\":\"error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"security\":[{\"ApiKeyAuth\":[]}],\"securitySchemes\":{\"ApiKeyAuth\":{\"description\":\"API key for authentication. Obtain your API key from https://platform.claude.com/settings/keys\",\"in\":\"header\",\"name\":\"x-api-key\",\"type\":\"apiKey\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/messages","segments":[{"lit":"messages"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"message","name__orig":"message","Name":"Message","name_":"message","name-":"message","NAME":"MESSAGE","index$":0}, {"active":true,"entity":"message","key$":"BasicMessageFlow","kind":"basic","name":"BasicMessageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"message_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Message')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const message_ref01_ent = client.Message()
    let message_ref01_data = setup.data.new.message['message_ref01']

    message_ref01_data = (await message_ref01_ent.create(message_ref01_data)).data()
    assert(null != message_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/message/MessageTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = ClaudeSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['message01','message02','message03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLAUDE_TEST_MESSAGE_ENTID': idmap,
    'CLAUDE_TEST_LIVE': 'FALSE',
    'CLAUDE_TEST_EXPLAIN': 'FALSE',
    'CLAUDE_APIKEY': '',
  })

  idmap = env['CLAUDE_TEST_MESSAGE_ENTID']

  const live = 'TRUE' === env.CLAUDE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLAUDE_TEST_MESSAGE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new ClaudeSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.CLAUDE_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.CLAUDE_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
