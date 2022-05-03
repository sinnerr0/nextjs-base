const path = require("path");

const buildEslintCommand = filenames => {
  const files = filenames.map(f => path.relative(process.cwd(), f)).join(" --file ");
  return `next lint --file ${files}`;
};

const buildPrettierCommand = filenames => {
  const files = filenames.map(f => path.relative(process.cwd(), f)).join(" ");
  return `prettier --check ${files}`;
};

const buildStylelintCommand = filenames => {
  const files = filenames.map(f => path.relative(process.cwd(), f)).join(" ");
  return `stylelint ${files}`;
};

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, buildPrettierCommand],
  "*.{css,scss}": [buildStylelintCommand, buildPrettierCommand],
};
