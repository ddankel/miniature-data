const { validateFileFrontmatter, displayErrors } = require("../src/validation");
const paths = require("../src/paths");

const allMarkdownFiles = paths.allMarkdownFiles;

allMarkdownFiles.forEach((file) => {
  const { isValid, errors } = validateFileFrontmatter(file);
  if (!isValid) displayErrors(file, errors);
});
