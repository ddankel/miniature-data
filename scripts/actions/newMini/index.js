const fs = require("fs");
const paths = require("../../utils/paths");
const createTemplate = require("./createTemplate");

const draftDir = paths.draftDir;
const templateFile = paths.draftTemplate;

const draftsToCreate = process.argv.slice(2);

if (!draftsToCreate.length) {
  console.log("You must specify the new miniature slugs as arguments");
  console.log("Examples:");
  console.log("  yarn new single-miniature");
  console.log("  yarn new first-mini second-mini third-mini");
  return;
}

if (!fs.existsSync(templateFile)) {
  return console.log(`Template file (${templateFile}) is missing.`);
}

draftsToCreate.forEach((item) => createTemplate(item));

console.log("Processing complete.  The new files are in", draftDir);
