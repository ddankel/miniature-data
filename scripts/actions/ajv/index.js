const paths = require("../../utils/paths");
const displayErrors = require("./displayErrors");
const validateFrontmatter = require("./validateFrontmatter");

const files = paths.markdownFiles;

files.forEach((file) => {
  const { isValid, errors } = validateFrontmatter(file);
  if (!isValid) displayErrors(file, errors);
});
