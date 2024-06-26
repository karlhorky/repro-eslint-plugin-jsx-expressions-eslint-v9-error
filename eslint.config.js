// @ts-check

import eslint from '@eslint/js';
import jsxExpressions from 'eslint-plugin-jsx-expressions';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: { 'jsx-expressions': jsxExpressions },
    rules: {
      'jsx-expressions/strict-logical-expressions': 'error',
    },
  },
);
