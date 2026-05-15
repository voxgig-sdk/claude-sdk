# ProjectName SDK exists test

import pytest
from claude_sdk import ClaudeSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = ClaudeSDK.test(None, None)
        assert testsdk is not None
