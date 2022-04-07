module.exports = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: true,
  overrides: [
    {
      files: ['.*', '*.json', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
  ],
  pluginSearchDirs: ['./assets'],
  importOrder: ['^[./]'],
  plugins: [require.resolve('@ianvs/prettier-plugin-sort-imports')],
};