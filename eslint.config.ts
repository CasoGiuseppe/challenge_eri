import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: [
      '**/dist/**',
      '**/dist-ssr/**',
      '**/coverage/**',
      '**/.storybook/**',
      '**/eslint.config.js',
      '**/eslint.config.ts',
      'src/**/__tests__/*',
      '**/.husky/**',
      '**/stories/**',
      '**/commitlint.config.ts',
    ],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),

  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },
  skipFormatting,
  {
    rules: {
      'no-console': ['error', { allow: ['error, table', 'warn'] }],
      'no-alert': 'error',
      'no-var': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-require-imports': 'off',
      'no-const-assign': 'error',
      'no-dupe-keys': 'error',
      'no-dupe-args': 'error',
      'no-empty': 'error',
      'no-ex-assign': 'error',
      'no-extra-boolean-cast': 'error',
      'no-extra-semi': 'error',
      'no-func-assign': 'error',
      'no-irregular-whitespace': 'warn',
      'no-magic-numbers': ['error', { ignore: [-1, 0, 1, 200, 500, 5173] }],
      eqeqeq: ['error', 'always'],
      'dot-notation': 'error',
      'no-unexpected-multiline': 'error',
      curly: 'error',
      'func-name-matching': 'error',
      'max-lines': ['error', { max: 200, skipComments: true, skipBlankLines: true }],
      'max-lines-per-function': ['error', { max: 50, skipComments: true, skipBlankLines: true }],
      'max-params': ['error', 5],
    },
  },
]
