import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default [
  {
    ignores: [],
    extends: ["plugin:prettier/recommended", 'next/core-web-vitals'],
    rules: {
      ...eslintPluginUnicorn.configs.recommended.rules,
      'unicorn/better-regex': 'warn'
    }
  }
];