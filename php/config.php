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
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'max_tokens',
              'req' => true,
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'messages',
              'req' => true,
              'type' => '`$ARRAY`',
              'union' => [
                'branches' => 2,
                'count' => 1,
                'depth' => 3,
              ],
            ],
            [
              'name' => 'metadata',
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
              'type' => '`$STRING`',
            ],
            [
              'name' => 'role',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'stop_reason',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'stop_sequence',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'stop_sequences',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'stream',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'system',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'temperature',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'top_k',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'top_p',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'usage',
              'type' => '`$OBJECT`',
            ],
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
                  'parts' => [
                    'messages',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
