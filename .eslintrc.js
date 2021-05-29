module.exports = {
  plugins: ['prettier'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:unicorn/recommended',
  ],
  rules: {
    'import/no-namespace': 'error',
    'import/no-relative-parent-imports': 'error',
    'import/no-anonymous-default-export': [
      'error',
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true, // The true value here is for backward compatibility
        allowLiteral: true,
        allowObject: true,
      },
    ],
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: 'constants/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'components/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'helpers/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-array-for-each': 'off', //better to turn on for strict linting
    'unicorn/no-array-reduce': 'off',
    'unicorn/prevent-abbreviations': 'off', //better to turn on for strict linting
    'unicorn/no-null': 'off',
    'unicorn/prefer-query-selector': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['src/components/**/*.tsx'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'pascalCase',
          },
        ],
      },
    },
    {
      files: ['src/pages/**/*.tsx'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            case: 'kebabCase',
          },
        ],
      },
    },
  ],
};
