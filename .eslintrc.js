module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  plugins: ['vue'],
  rules: {
    semi: ['error', 'always'],
    'semi-style': ['error', 'last'],
    'no-extra-semi': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'all', args: 'none' }],
    'vue/max-attributes-per-line': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
        },
      },
    ],
    'space-before-function-paren': 'off',
    'prettier/prettier': ['error', { trailingComma: 'all' }],
  },
};
