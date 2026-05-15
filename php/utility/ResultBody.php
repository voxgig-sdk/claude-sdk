<?php
declare(strict_types=1);

// Claude SDK utility: result_body

class ClaudeResultBody
{
    public static function call(ClaudeContext $ctx): ?ClaudeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
