"use strict";

const rule = require("../eslint-disable-enforce-comment-above")
const { RuleTester } = require("eslint")

const ruleTester = new RuleTester();

ruleTester.run('eslint-disable-enforce-comment-above', rule, {
  valid: [
    {
      code: '// TEST\n/* eslint-disable func-names */',
      errors: [{ messageId: 'noCommentAbove' }],
    },
    {
      code: '// TEST\n//TEST\n/* eslint-disable func-names */',
      errors: [{ messageId: 'noCommentAbove' }],
    },
    {
      code: '/* TEST */\n/* eslint-disable func-names */',
      errors: [{ messageId: 'noCommentAbove' }],
    },
    {
      code: '/* TEST */\n/* eslint-disable func-names */\n/* eslint-disable func-names */\n',
      errors: [{ messageId: 'noCommentAbove' }],
    },
    {
      code: '/* TEST */\n/* eslint-disable func-names */\ntest = "test"',
      errors: [{ messageId: 'noCommentAbove' }],
    },
    {
      code: '\ntest = "test"',
      errors: [{ messageId: 'noCommentAbove' }],
    },
  ],
  invalid: [
    {
      code: '/* eslint-disable func-names */',
      errors: [{ messageId: 'noCommentAbove' }],
    },
    {
      code: '/* eslint-disable func-names */\ntest = "test"',
      errors: [{ messageId: 'noCommentAbove' }],
    },
  ],
});
