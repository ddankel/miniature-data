const path = require("path");
const paths = require("../paths");
const {
  formatAdditionalPropertyError,
  formatAllowedValuesError,
  formatRequiredError,
  formatTypeError,
} = require("./format");

const displayErrors = (file, errors) => {
  if (!errors) return;

  console.log("minis/" + path.relative(paths.minisDir, file));

  errors.forEach((error) => {
    switch (error.keyword) {
      case "required":
        // Missing field
        formatRequiredError(error);
        break;
      case "additionalProperties":
        // Unexpected additional field
        formatAdditionalPropertyError(error);
        break;
      case "enum":
        // Invalid value for valid field
        formatAllowedValuesError(error);
        break;
      case "type":
        // Invalid type for valid field
        formatTypeError(error);
        break;
      default:
        console.log(error);
    }
  });

  console.log();
};

module.exports = displayErrors;
