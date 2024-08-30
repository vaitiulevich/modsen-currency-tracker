import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

export default [
  // Main configuration for TypeScript and JavaScript files
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.browser,
      parser: tsparser,
    },
    plugins: {
      react: pluginReact,
      '@typescript-eslint': tseslint,
      '@eslint/js': pluginJs,
      'simple-import-sort': simpleImportSort,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'simple-import-sort/imports': 'error', // Enforce sorting of imports
      'simple-import-sort/exports': 'error', // Enforce sorting of exports
      // Add any other global rules here
    },
  },
  // Recommended rules for JavaScript
  {
    files: ['**/*.js'],
    rules: {
      // Add JavaScript-specific rules here, if any
    },
  },
  // Recommended rules for TypeScript
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // Add TypeScript-specific rules here, if any
    },
  },
  // React-specific rules
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      // Add React-specific rules here, if any
    },
  },
];
