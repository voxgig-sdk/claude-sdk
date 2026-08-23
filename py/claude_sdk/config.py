# Claude SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Claude",
            "slug": "claude",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://api.anthropic.com/v1",
            "auth": {
                "prefix": "",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "message": {},
            },
        },
        "entity": {
      "message": {
        "fields": [
          {
            "name": "content",
            "short": "Array of content blocks in the response",
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "short": "Unique identifier for the message",
            "type": "`$STRING`",
          },
          {
            "name": "max_tokens",
            "req": True,
            "short": "Maximum number of tokens to generate in the response",
            "type": "`$INTEGER`",
          },
          {
            "name": "messages",
            "req": True,
            "short": "Array of message objects representing the conversation history",
            "type": "`$ARRAY`",
            "union": {
              "branches": 2,
              "count": 1,
              "depth": 3,
            },
          },
          {
            "name": "metadata",
            "short": "Metadata about the request",
            "type": "`$OBJECT`",
          },
          {
            "name": "model",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "short": "The model used to generate the response",
            "type": "`$STRING`",
          },
          {
            "name": "role",
            "short": "The role of the response sender",
            "type": "`$STRING`",
          },
          {
            "name": "stop_reason",
            "short": "Reason why the model stopped generating",
            "type": "`$STRING`",
          },
          {
            "name": "stop_sequence",
            "short": "The stop sequence that caused generation to stop, if applicable",
            "type": "`$STRING`",
          },
          {
            "name": "stop_sequences",
            "short": "Custom stop sequences to end generation",
            "type": "`$ARRAY`",
          },
          {
            "name": "stream",
            "short": "Whether to stream the response incrementally",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "system",
            "short": "System prompt to set the context and behavior for Claude",
            "type": "`$STRING`",
          },
          {
            "name": "temperature",
            "short": "Sampling temperature (0.0 to 1.0).",
            "type": "`$NUMBER`",
          },
          {
            "name": "top_k",
            "short": "Only sample from the top K options for each subsequent token",
            "type": "`$INTEGER`",
          },
          {
            "name": "top_p",
            "short": "Nucleus sampling parameter.",
            "type": "`$NUMBER`",
          },
          {
            "name": "type",
            "short": "Object type",
            "type": "`$STRING`",
          },
          {
            "name": "usage",
            "short": "Token usage information",
            "type": "`$OBJECT`",
          },
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
                  "messages",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
