module.exports = {
  root: true,
  extends: [
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    impliedStrict: true,
    ecmaFeatures: {
      legacyDecorators: true,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-anonymous-default-export': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
