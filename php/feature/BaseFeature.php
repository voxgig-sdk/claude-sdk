<?php
declare(strict_types=1);

// Claude SDK base feature

class ClaudeBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(ClaudeContext $ctx, array $options): void {}
    public function PostConstruct(ClaudeContext $ctx): void {}
    public function PostConstructEntity(ClaudeContext $ctx): void {}
    public function SetData(ClaudeContext $ctx): void {}
    public function GetData(ClaudeContext $ctx): void {}
    public function GetMatch(ClaudeContext $ctx): void {}
    public function SetMatch(ClaudeContext $ctx): void {}
    public function PrePoint(ClaudeContext $ctx): void {}
    public function PreSpec(ClaudeContext $ctx): void {}
    public function PreRequest(ClaudeContext $ctx): void {}
    public function PreResponse(ClaudeContext $ctx): void {}
    public function PreResult(ClaudeContext $ctx): void {}
    public function PreDone(ClaudeContext $ctx): void {}
    public function PreUnexpected(ClaudeContext $ctx): void {}
}
