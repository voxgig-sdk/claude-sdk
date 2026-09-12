
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Claude',
        slug: "claude",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://api.anthropic.com/v1",

    auth: {
      prefix: '',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      message: {
      },

    }
  }


  entity = {
    "message": {
      "fields": [
        {
          "name": "content",
          "short": "Array of content blocks in the response",
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "short": "Unique identifier for the message",
          "type": "`$STRING`"
        },
        {
          "name": "max_tokens",
          "req": true,
          "short": "Maximum number of tokens to generate in the response",
          "type": "`$INTEGER`"
        },
        {
          "name": "messages",
          "req": true,
          "short": "Array of message objects representing the conversation history",
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 3
          }
        },
        {
          "name": "metadata",
          "short": "Metadata about the request",
          "type": "`$OBJECT`"
        },
        {
          "name": "model",
          "op": {
            "create": {
              "req": true,
              "type": "`$STRING`"
            }
          },
          "short": "The model used to generate the response",
          "type": "`$STRING`"
        },
        {
          "name": "role",
          "short": "The role of the response sender",
          "type": "`$STRING`"
        },
        {
          "name": "stop_reason",
          "short": "Reason why the model stopped generating",
          "type": "`$STRING`"
        },
        {
          "name": "stop_sequence",
          "short": "The stop sequence that caused generation to stop, if applicable",
          "type": "`$STRING`"
        },
        {
          "name": "stop_sequences",
          "short": "Custom stop sequences to end generation",
          "type": "`$ARRAY`"
        },
        {
          "name": "stream",
          "short": "Whether to stream the response incrementally",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "system",
          "short": "System prompt to set the context and behavior for Claude",
          "type": "`$STRING`"
        },
        {
          "name": "temperature",
          "short": "Sampling temperature (0.0 to 1.0).",
          "type": "`$NUMBER`"
        },
        {
          "name": "top_k",
          "short": "Only sample from the top K options for each subsequent token",
          "type": "`$INTEGER`"
        },
        {
          "name": "top_p",
          "short": "Nucleus sampling parameter.",
          "type": "`$NUMBER`"
        },
        {
          "name": "type",
          "short": "Object type",
          "type": "`$STRING`"
        },
        {
          "name": "usage",
          "short": "Token usage information",
          "type": "`$OBJECT`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "message",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/messages",
              "segments": [
                {
                  "lit": "messages"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "messages"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

