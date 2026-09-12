-- Claude SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Claude",
      slug = "claude",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://api.anthropic.com/v1",
      auth = {
        prefix = "",
      },
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["message"] = {},
      },
    },
    entity = {
      ["message"] = {
        ["fields"] = {
          {
            ["name"] = "content",
            ["short"] = "Array of content blocks in the response",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the message",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "max_tokens",
            ["req"] = true,
            ["short"] = "Maximum number of tokens to generate in the response",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "messages",
            ["req"] = true,
            ["short"] = "Array of message objects representing the conversation history",
            ["type"] = "`$ARRAY`",
            ["union"] = {
              ["branches"] = 2,
              ["count"] = 1,
              ["depth"] = 3,
            },
          },
          {
            ["name"] = "metadata",
            ["short"] = "Metadata about the request",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "model",
            ["op"] = {
              ["create"] = {
                ["req"] = true,
                ["type"] = "`$STRING`",
              },
            },
            ["short"] = "The model used to generate the response",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "role",
            ["short"] = "The role of the response sender",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stop_reason",
            ["short"] = "Reason why the model stopped generating",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stop_sequence",
            ["short"] = "The stop sequence that caused generation to stop, if applicable",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stop_sequences",
            ["short"] = "Custom stop sequences to end generation",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "stream",
            ["short"] = "Whether to stream the response incrementally",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "system",
            ["short"] = "System prompt to set the context and behavior for Claude",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "temperature",
            ["short"] = "Sampling temperature (0.0 to 1.0).",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "top_k",
            ["short"] = "Only sample from the top K options for each subsequent token",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "top_p",
            ["short"] = "Nucleus sampling parameter.",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "type",
            ["short"] = "Object type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "usage",
            ["short"] = "Token usage information",
            ["type"] = "`$OBJECT`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "message",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/messages",
                ["segments"] = {
                  {
                    ["lit"] = "messages",
                  },
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "messages",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
