module.exports = {
  root: true,
  extends: '@react-native-community',
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        // 'no-unused-vars': 0,
        // '@typescript-eslint/no-shadow': ['error'],
        '@javascript-eslint/no-shadow': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'error',
        'no-unused-vars': 'off',
        '@javascript-eslint/no-unused-vars': 'off',
        'react-native/no-inline-styles': 'off',
        'react-hooks/exhaustive-deps': 'off',
      },
    },
  ],
};
