<?php
declare(strict_types=1);

// Claude SDK exists test

require_once __DIR__ . '/../claude_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = ClaudeSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
