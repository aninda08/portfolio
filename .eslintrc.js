module.exports = {
  plugins: ['prettier'],
  extends: ['airbnb-typescript', 'airbnb/hooks', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
