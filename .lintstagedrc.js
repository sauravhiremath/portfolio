const path = require('path')

const buildEslintCommand = filenames => [
  `yarn lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`,
  `yarn prettier --write ${filenames.map(f => path.relative(process.cwd(), f)).join(' ')}`,
]

const prettifyMarkdownAndJson = filenames => [
  `yarn prettier --write ${filenames.map(f => path.relative(process.cwd(), f)).join(' ')}`,
]

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '**/*.(md|json)': [prettifyMarkdownAndJson],
}
