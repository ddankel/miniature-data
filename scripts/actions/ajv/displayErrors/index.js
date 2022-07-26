const path = require("path");
const paths = require("../../../utils/paths");
const formatAdditionalPropertyError = require("./formatAdditionalPropertyError");
const formatAllowedValuesError = require("./formatAllowedValuesError");
const formatRequiredError = require("./formatRequiredError");

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
