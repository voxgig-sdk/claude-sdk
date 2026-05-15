package core

type ClaudeError struct {
	IsClaudeError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewClaudeError(code string, msg string, ctx *Context) *ClaudeError {
	return &ClaudeError{
		IsClaudeError: true,
		Sdk:              "Claude",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ClaudeError) Error() string {
	return e.Msg
}
