const schema = require("./schema");
const getFrontmatter = require("../../utils/getFrontmatter");

const Ajv = require("ajv");
const ajv = new Ajv({
  allErrors: true,
  verbose: true,
  allowUnionTypes: true,
});
const validate = ajv.compile(schema);

const validateFrontmatter = (file) => {
  const frontmatter = getFrontmatter(file);
  const isValid = validate(frontmatter);

  return { isValid, errors: validate.errors };
};

module.exports = validateFrontmatter;
