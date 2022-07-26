const schema = require("../../schema");
const frontmatterFromFile = require("../../src/frontmatterFromFile");

const Ajv = require("ajv");
const ajv = new Ajv({
  allErrors: true,
  verbose: true,
  allowUnionTypes: true,
});
const validate = ajv.compile(schema);

const validateFileFrontmatter = (file) => {
  const frontmatter = frontmatterFromFile(file);
  const isValid = validate(frontmatter);

  return { isValid, errors: validate.errors };
};

module.exports = validateFileFrontmatter;
