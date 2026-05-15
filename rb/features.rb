# Claude SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module ClaudeFeatures
  def self.make_feature(name)
    case name
    when "base"
      ClaudeBaseFeature.new
    when "test"
      ClaudeTestFeature.new
    else
      ClaudeBaseFeature.new
    end
  end
end
