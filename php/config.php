<?php
declare(strict_types=1);

// Claude SDK configuration

class ClaudeConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Claude",
                "slug" => "claude",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api.anthropic.com/v1",
                "auth" => [
                    "prefix" => "",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "message" => [],
                ],
            ],
            "entity" => [
        'message' => [
          'fields' => [
            [
              'name' => 'content',
              'short' => 'Array of content blocks in the response',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the message',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'max_tokens',
              'req' => true,
              'short' => 'Maximum number of tokens to generate in the response',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'messages',
              'req' => true,
              'short' => 'Array of message objects representing the conversation history',
              'type' => '`$ARRAY`',
              'union' => [
                'branches' => 2,
                'count' => 1,
                'depth' => 3,
              ],
            ],
            [
              'name' => 'metadata',
              'short' => 'Metadata about the request',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'model',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'short' => 'The model used to generate the response',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'role',
              'short' => 'The role of the response sender',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'stop_reason',
              'short' => 'Reason why the model stopped generating',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'stop_sequence',
              'short' => 'The stop sequence that caused generation to stop, if applicable',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'stop_sequences',
              'short' => 'Custom stop sequences to end generation',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'stream',
              'short' => 'Whether to stream the response incrementally',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'system',
              'short' => 'System prompt to set the context and behavior for Claude',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'temperature',
              'short' => 'Sampling temperature (0.0 to 1.0).',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'top_k',
              'short' => 'Only sample from the top K options for each subsequent token',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'top_p',
              'short' => 'Nucleus sampling parameter.',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'type',
              'short' => 'Object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'usage',
              'short' => 'Token usage information',
              'type' => '`$OBJECT`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'message',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/messages',
                  'segments' => [
                    [
                      'lit' => 'messages',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'messages',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return ClaudeFeatures::make_feature($name);
    }
}
