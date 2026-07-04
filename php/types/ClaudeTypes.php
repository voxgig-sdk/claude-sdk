<?php
declare(strict_types=1);

// Typed models for the Claude SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Message entity data model. */
class Message
{
    public ?array $content = null;
    public ?string $id = null;
    public int $max_token;
    public array $message;
    public ?array $metadata = null;
    public ?string $model = null;
    public ?string $role = null;
    public ?string $stop_reason = null;
    public ?string $stop_sequence = null;
    public ?bool $stream = null;
    public ?string $system = null;
    public ?float $temperature = null;
    public ?int $top_k = null;
    public ?float $top_p = null;
    public ?string $type = null;
    public ?array $usage = null;
}

/** Match filter for Message#create (any subset of Message fields). */
class MessageCreateData
{
    public ?array $content = null;
    public ?string $id = null;
    public ?int $max_token = null;
    public ?array $message = null;
    public ?array $metadata = null;
    public ?string $model = null;
    public ?string $role = null;
    public ?string $stop_reason = null;
    public ?string $stop_sequence = null;
    public ?bool $stream = null;
    public ?string $system = null;
    public ?float $temperature = null;
    public ?int $top_k = null;
    public ?float $top_p = null;
    public ?string $type = null;
    public ?array $usage = null;
}

