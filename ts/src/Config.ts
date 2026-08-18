
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Claude',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
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
          "type": "`$ARRAY`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "max_tokens",
          "req": true,
          "type": "`$INTEGER`"
        },
        {
          "name": "messages",
          "req": true,
          "type": "`$ARRAY`",
          "union": {
            "branches": 2,
            "count": 1,
            "depth": 3
          }
        },
        {
          "name": "metadata",
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
          "type": "`$STRING`"
        },
        {
          "name": "role",
          "type": "`$STRING`"
        },
        {
          "name": "stop_reason",
          "type": "`$STRING`"
        },
        {
          "name": "stop_sequence",
          "type": "`$STRING`"
        },
        {
          "name": "stop_sequences",
          "type": "`$ARRAY`"
        },
        {
          "name": "stream",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "system",
          "type": "`$STRING`"
        },
        {
          "name": "temperature",
          "type": "`$NUMBER`"
        },
        {
          "name": "top_k",
          "type": "`$INTEGER`"
        },
        {
          "name": "top_p",
          "type": "`$NUMBER`"
        },
        {
          "name": "type",
          "type": "`$STRING`"
        },
        {
          "name": "usage",
          "type": "`$OBJECT`"
        }
      ],
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
              "parts": [
                "messages"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
  config
}

