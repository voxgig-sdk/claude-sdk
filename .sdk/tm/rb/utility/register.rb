# Claude SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

ClaudeUtility.registrar = ->(u) {
  u.clean = ClaudeUtilities::Clean
  u.done = ClaudeUtilities::Done
  u.make_error = ClaudeUtilities::MakeError
  u.feature_add = ClaudeUtilities::FeatureAdd
  u.feature_hook = ClaudeUtilities::FeatureHook
  u.feature_init = ClaudeUtilities::FeatureInit
  u.fetcher = ClaudeUtilities::Fetcher
  u.make_fetch_def = ClaudeUtilities::MakeFetchDef
  u.make_context = ClaudeUtilities::MakeContext
  u.make_options = ClaudeUtilities::MakeOptions
  u.make_request = ClaudeUtilities::MakeRequest
  u.make_response = ClaudeUtilities::MakeResponse
  u.make_result = ClaudeUtilities::MakeResult
  u.make_point = ClaudeUtilities::MakePoint
  u.make_spec = ClaudeUtilities::MakeSpec
  u.make_url = ClaudeUtilities::MakeUrl
  u.param = ClaudeUtilities::Param
  u.prepare_auth = ClaudeUtilities::PrepareAuth
  u.prepare_body = ClaudeUtilities::PrepareBody
  u.prepare_headers = ClaudeUtilities::PrepareHeaders
  u.prepare_method = ClaudeUtilities::PrepareMethod
  u.prepare_params = ClaudeUtilities::PrepareParams
  u.prepare_path = ClaudeUtilities::PreparePath
  u.prepare_query = ClaudeUtilities::PrepareQuery
  u.result_basic = ClaudeUtilities::ResultBasic
  u.result_body = ClaudeUtilities::ResultBody
  u.result_headers = ClaudeUtilities::ResultHeaders
  u.transform_request = ClaudeUtilities::TransformRequest
  u.transform_response = ClaudeUtilities::TransformResponse
}
