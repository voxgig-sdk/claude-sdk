# Claude SDK utility: make_context

from projectname_sdk.core.context import ClaudeContext


def make_context_util(ctxmap, basectx):
    return ClaudeContext(ctxmap, basectx)
