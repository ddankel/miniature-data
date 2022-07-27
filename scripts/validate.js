const chalk = require("chalk");
const { validateFileFrontmatter, displayErrors } = require("../src/validation");
const paths = require("../src/paths");

const allMarkdownFiles = paths.allMarkdownFiles;
let errorCount = 0;

allMarkdownFiles.forEach((file) => {
  const { isValid, errors } = validateFileFrontmatter(file);

  if (isValid) return;

  displayErrors(file, errors);
  errorCount++;
});

console.log();
const count = errorCount > 0 ? chalk.red(errorCount) : chalk.green(0);

console.log(`Validation complete with ${count} errors.`);
