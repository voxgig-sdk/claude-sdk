# Claude SDK utility: make_context

from core.context import ClaudeContext


def make_context_util(ctxmap, basectx):
    return ClaudeContext(ctxmap, basectx)
