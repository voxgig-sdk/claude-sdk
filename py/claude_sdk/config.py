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
            "type": "`$ARRAY`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "max_tokens",
            "req": True,
            "type": "`$INTEGER`",
          },
          {
            "name": "messages",
            "req": True,
            "type": "`$ARRAY`",
            "union": {
              "branches": 2,
              "count": 1,
              "depth": 3,
            },
          },
          {
            "name": "metadata",
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
            "type": "`$STRING`",
          },
          {
            "name": "role",
            "type": "`$STRING`",
          },
          {
            "name": "stop_reason",
            "type": "`$STRING`",
          },
          {
            "name": "stop_sequence",
            "type": "`$STRING`",
          },
          {
            "name": "stop_sequences",
            "type": "`$ARRAY`",
          },
          {
            "name": "stream",
            "type": "`$BOOLEAN`",
          },
          {
            "name": "system",
            "type": "`$STRING`",
          },
          {
            "name": "temperature",
            "type": "`$NUMBER`",
          },
          {
            "name": "top_k",
            "type": "`$INTEGER`",
          },
          {
            "name": "top_p",
            "type": "`$NUMBER`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
          {
            "name": "usage",
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
