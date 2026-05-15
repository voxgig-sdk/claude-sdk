-- Claude SDK error

local ClaudeError = {}
ClaudeError.__index = ClaudeError


function ClaudeError.new(code, msg, ctx)
  local self = setmetatable({}, ClaudeError)
  self.is_sdk_error = true
  self.sdk = "Claude"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function ClaudeError:error()
  return self.msg
end


function ClaudeError:__tostring()
  return self.msg
end


return ClaudeError
