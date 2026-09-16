# Claude SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module ClaudeFeatures
  def self.make_feature(name)
    case name
    when "base"
      ClaudeBaseFeature.new
    when "ratelimit"
      ClaudeRatelimitFeature.new
    when "retry"
      ClaudeRetryFeature.new
    when "test"
      ClaudeTestFeature.new
    when "timeout"
      ClaudeTimeoutFeature.new
    else
      ClaudeBaseFeature.new
    end
  end
end
