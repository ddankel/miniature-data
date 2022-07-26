const path = require("path");
const paths = require("../paths");
const {
  formatAdditionalPropertyError,
  formatAllowedValuesError,
  formatRequiredError,
} = require("./format");

const displayErrors = (file, errors) => {
  if (!errors) return;

  console.log("minis/" + path.relative(paths.minisDir, file));

  errors.forEach((error) => {
    switch (error.keyword) {
      case "required":
        formatRequiredError(error);
        break;
      case "additionalProperties":
        formatAdditionalPropertyError(error);
        break;
      case "enum":
        formatAllowedValuesError(error);
        break;
      default:
        console.log(error);
    }
  });

  console.log();
};

module.exports = displayErrors;
