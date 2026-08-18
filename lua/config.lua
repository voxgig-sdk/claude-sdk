-- Claude SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Claude",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
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
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "id",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "max_tokens",
            ["req"] = true,
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "messages",
            ["req"] = true,
            ["type"] = "`$ARRAY`",
            ["union"] = {
              ["branches"] = 2,
              ["count"] = 1,
              ["depth"] = 3,
            },
          },
          {
            ["name"] = "metadata",
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
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "role",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stop_reason",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stop_sequence",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "stop_sequences",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "stream",
            ["type"] = "`$BOOLEAN`",
          },
          {
            ["name"] = "system",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "temperature",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "top_k",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "top_p",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "type",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "usage",
            ["type"] = "`$OBJECT`",
          },
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
                ["parts"] = {
                  "messages",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
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
