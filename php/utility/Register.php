<?php
declare(strict_types=1);

// Claude SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

ClaudeUtility::setRegistrar(function (ClaudeUtility $u): void {
    $u->clean = [ClaudeClean::class, 'call'];
    $u->done = [ClaudeDone::class, 'call'];
    $u->make_error = [ClaudeMakeError::class, 'call'];
    $u->feature_add = [ClaudeFeatureAdd::class, 'call'];
    $u->feature_hook = [ClaudeFeatureHook::class, 'call'];
    $u->feature_init = [ClaudeFeatureInit::class, 'call'];
    $u->fetcher = [ClaudeFetcher::class, 'call'];
    $u->make_fetch_def = [ClaudeMakeFetchDef::class, 'call'];
    $u->make_context = [ClaudeMakeContext::class, 'call'];
    $u->make_options = [ClaudeMakeOptions::class, 'call'];
    $u->make_request = [ClaudeMakeRequest::class, 'call'];
    $u->make_response = [ClaudeMakeResponse::class, 'call'];
    $u->make_result = [ClaudeMakeResult::class, 'call'];
    $u->make_point = [ClaudeMakePoint::class, 'call'];
    $u->make_spec = [ClaudeMakeSpec::class, 'call'];
    $u->make_url = [ClaudeMakeUrl::class, 'call'];
    $u->param = [ClaudeParam::class, 'call'];
    $u->prepare_auth = [ClaudePrepareAuth::class, 'call'];
    $u->prepare_body = [ClaudePrepareBody::class, 'call'];
    $u->prepare_headers = [ClaudePrepareHeaders::class, 'call'];
    $u->prepare_method = [ClaudePrepareMethod::class, 'call'];
    $u->prepare_params = [ClaudePrepareParams::class, 'call'];
    $u->prepare_path = [ClaudePreparePath::class, 'call'];
    $u->prepare_query = [ClaudePrepareQuery::class, 'call'];
    $u->result_basic = [ClaudeResultBasic::class, 'call'];
    $u->result_body = [ClaudeResultBody::class, 'call'];
    $u->result_headers = [ClaudeResultHeaders::class, 'call'];
    $u->transform_request = [ClaudeTransformRequest::class, 'call'];
    $u->transform_response = [ClaudeTransformResponse::class, 'call'];
});
