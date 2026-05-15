<?php
declare(strict_types=1);

// Claude SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class ClaudeMakeContext
{
    public static function call(array $ctxmap, ?ClaudeContext $basectx): ClaudeContext
    {
        return new ClaudeContext($ctxmap, $basectx);
    }
}
