<?php
declare(strict_types=1);

// Claude SDK utility: prepare_body

class ClaudePrepareBody
{
    public static function call(ClaudeContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
