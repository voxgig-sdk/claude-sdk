<?php
declare(strict_types=1);

// Claude SDK configuration

class ClaudeConfig
{
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
                    "prefix" => "Bearer",
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
              'req' => false,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'id',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'max_token',
              'req' => true,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'message',
              'req' => true,
              'type' => '`$ARRAY`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'metadata',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'model',
              'op' => [
                'create' => [
                  'req' => true,
                  'type' => '`$STRING`',
                ],
              ],
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'role',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'stop_reason',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'stop_sequence',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'stream',
              'req' => false,
              'type' => '`$BOOLEAN`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'system',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'temperature',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'top_k',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'top_p',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'type',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'usage',
              'req' => false,
              'type' => '`$OBJECT`',
              'active' => true,
              'index$' => 15,
            ],
          ],
          'name' => 'message',
          'op' => [
            'create' => [
              'name' => 'create',
              'points' => [
                [
                  'method' => 'POST',
                  'orig' => '/messages',
                  'parts' => [
                    'messages',
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'active' => true,
                  'args' => [],
                  'select' => [],
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'create',
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
