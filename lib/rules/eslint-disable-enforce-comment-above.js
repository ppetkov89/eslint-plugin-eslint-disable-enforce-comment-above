module.exports = {
  meta: {
    docs: {
      description: 'Enforce adding comment above eslint-disable explaining why',
      category: "Stylistic Issues",
      recommended: false,
      url: "https://github.com/ppetkov89/eslint-plugin-eslint-disable-enforce-comment-above",
    },
    messages: {
      noCommentAbove: 'eslint-disable should have a descriptive comment above.',
    },
    fixable: null,
  },
  create: function create(context) {
    return {
      Program(node) {
        node.comments.forEach((comment, index) => {
          if (comment.value.includes('eslint-disable') && !node.comments[index - 1]) {
            context.report({
              node,
              messageId: 'noCommentAbove',
              loc: comment.loc,
            });
          }
        });
      },
    };
  },
};
