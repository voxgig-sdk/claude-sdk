package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewMessageEntityFunc func(client *ClaudeSDK, entopts map[string]any) ClaudeEntity

