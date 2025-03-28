module.exports = {
  root: true,
  extends: ['eslint:recommended'],
  env: {
    es6: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json'
      },
      extends: [
        'expo',
        'plugin:react/recommended',
        'plugin:react-native/all',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
      ],
      plugins: [
        'react',
        'react-native',
        '@typescript-eslint',
        'react-hooks',
        'prettier'
      ],
      rules: {
        'prettier/prettier': 'error',
        'react-native/sort-styles': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' }
        ],
        'no-console': 'warn',
        'react-native/no-raw-text': 'off'
      }
    }
  ]
};
