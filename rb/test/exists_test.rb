# Claude SDK exists test

require "minitest/autorun"
require_relative "../Claude_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = ClaudeSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
