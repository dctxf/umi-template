module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    page: true,
    REACT_APP_ENV: true,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'react', 'import'],
  rules: {
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'react/react-in-jsx-scope': 'off',
    'jsx-quotes': 'off',
  },
};
