module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  // add your custom rules here
  rules: {
    'prefer-promise-reject-errors': 'off',
    'import/prefer-default-export': 'off',
    'arrow-parens': ['error', 'as-needed'],
  },
  overrides: [{
    files: '*.spec.js',
    rules: { 'no-console': 'off' },
  }],
};
