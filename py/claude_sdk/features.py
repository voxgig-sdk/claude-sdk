# Claude SDK feature factory

from claude_sdk.feature.base_feature import ClaudeBaseFeature
from claude_sdk.feature.test_feature import ClaudeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: ClaudeBaseFeature(),
        "test": lambda: ClaudeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
