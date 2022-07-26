const { draftDir } = require("../src/paths");
const createDraftMiniature = require("../src/createDraftMiniature");

const draftsToCreate = process.argv.slice(2);

if (!draftsToCreate.length) {
  console.log("You must specify the new miniature slugs as arguments");
  console.log("Examples:");
  console.log("  yarn new single-miniature");
  console.log("  yarn new first-mini second-mini third-mini");
  return;
}

draftsToCreate.forEach((item) => createDraftMiniature(item));

console.log("Processing complete.  The new files are in", draftDir);
