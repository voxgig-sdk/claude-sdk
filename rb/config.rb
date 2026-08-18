# Claude SDK configuration

module ClaudeConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Claude",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api.anthropic.com/v1",
        "auth" => {
          "prefix" => "",
        },
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "message" => {},
        },
      },
      "entity" => {
        "message" => {
          "fields" => [
            {
              "name" => "content",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "id",
              "type" => "`$STRING`",
            },
            {
              "name" => "max_tokens",
              "req" => true,
              "type" => "`$INTEGER`",
            },
            {
              "name" => "messages",
              "req" => true,
              "type" => "`$ARRAY`",
              "union" => {
                "branches" => 2,
                "count" => 1,
                "depth" => 3,
              },
            },
            {
              "name" => "metadata",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "model",
              "op" => {
                "create" => {
                  "req" => true,
                  "type" => "`$STRING`",
                },
              },
              "type" => "`$STRING`",
            },
            {
              "name" => "role",
              "type" => "`$STRING`",
            },
            {
              "name" => "stop_reason",
              "type" => "`$STRING`",
            },
            {
              "name" => "stop_sequence",
              "type" => "`$STRING`",
            },
            {
              "name" => "stop_sequences",
              "type" => "`$ARRAY`",
            },
            {
              "name" => "stream",
              "type" => "`$BOOLEAN`",
            },
            {
              "name" => "system",
              "type" => "`$STRING`",
            },
            {
              "name" => "temperature",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "top_k",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "top_p",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "type",
              "type" => "`$STRING`",
            },
            {
              "name" => "usage",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "message",
          "op" => {
            "create" => {
              "input" => "data",
              "name" => "create",
              "points" => [
                {
                  "args" => {},
                  "kind" => "http",
                  "method" => "POST",
                  "orig" => "/messages",
                  "parts" => [
                    "messages",
                  ],
                  "select" => {},
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    ClaudeFeatures.make_feature(name)
  end
end
