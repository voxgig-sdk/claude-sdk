<?php
declare(strict_types=1);

// Claude SDK utility: feature_add

class ClaudeFeatureAdd
{
    public static function call(ClaudeContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
