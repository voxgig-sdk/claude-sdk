# Claude SDK utility: make_context
require_relative '../core/context'
module ClaudeUtilities
  MakeContext = ->(ctxmap, basectx) {
    ClaudeContext.new(ctxmap, basectx)
  }
end
