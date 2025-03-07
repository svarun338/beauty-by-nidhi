/** @type {import("prettier").Config} */
module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  printWidth: 80,
  plugins: [require('prettier-plugin-tailwindcss')],
}
