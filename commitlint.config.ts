module.exports = {
  extends: ['@commitlint/config-conventional'],
  ules: {
    'subject-empty': [
      2,
      'never',
      {
        ignorePattern: '^Merge ',
      },
    ],
    'type-empty': [
      2,
      'never',
      {
        ignorePattern: '^Merge ',
      },
    ],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
      {
        ignorePattern: '^Merge ',
      },
    ],
  },
}
