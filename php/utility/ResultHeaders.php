<?php
declare(strict_types=1);

// Claude SDK utility: result_headers

class ClaudeResultHeaders
{
    public static function call(ClaudeContext $ctx): ?ClaudeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
