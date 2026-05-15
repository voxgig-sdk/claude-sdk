<?php
declare(strict_types=1);

// Claude SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class ClaudeFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new ClaudeBaseFeature();
            case "test":
                return new ClaudeTestFeature();
            default:
                return new ClaudeBaseFeature();
        }
    }
}
