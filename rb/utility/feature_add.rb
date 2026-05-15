# Claude SDK utility: feature_add
module ClaudeUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
