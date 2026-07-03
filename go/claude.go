package voxgigclaudesdk

import (
	"github.com/voxgig-sdk/claude-sdk/go/core"
	"github.com/voxgig-sdk/claude-sdk/go/entity"
	"github.com/voxgig-sdk/claude-sdk/go/feature"
	_ "github.com/voxgig-sdk/claude-sdk/go/utility"
)

// Type aliases preserve external API.
type ClaudeSDK = core.ClaudeSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ClaudeEntity = core.ClaudeEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ClaudeError = core.ClaudeError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewMessageEntityFunc = func(client *core.ClaudeSDK, entopts map[string]any) core.ClaudeEntity {
		return entity.NewMessageEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewClaudeSDK = core.NewClaudeSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewClaudeSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *ClaudeSDK  { return NewClaudeSDK(nil) }
func Test() *ClaudeSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
