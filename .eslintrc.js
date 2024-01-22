module.exports = {
  root: true,
  globals: {
    angular: false,
    module: false,
    inject: false,
    document: false,
  },
  env: {
    browser: true,
    es2021: true,
    amd: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
  },
  plugins: ['import', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/require-default-props': 'off', // we don't use prop-types

    'import/prefer-default-export': 'off', // force named exports
    'import/no-default-export': 'error',

    '@typescript-eslint/no-unused-vars': 'warn', // 'error' is not convinient in development
    '@typescript-eslint/no-empty-function': 'off',

    'consistent-return': 'off', // we want functions to have different return behavior

    'react/jsx-props-no-spreading': [
      'error', { exceptions: ['Input', 'FileInput', 'Textarea', 'Select'] }],
    'prettier/prettier': 'warn', // Enable the Prettier rule
  },
}
