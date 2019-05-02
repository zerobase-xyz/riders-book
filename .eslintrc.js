module.exports = {
  parser:  'vue-eslint-parser',
  parserOptions: {
    'parser': '@typescript-eslint/parser',
  },
  extends:  [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'singleQuote': true,
        'semi': false
      }
    ],
    'indent': [
      "error",
      2
    ],
    'interface-name': false,
    'ordered-imports': false,
    'object-literal-sort-keys': false,
    'no-consecutive-blank-lines': false
  }
}