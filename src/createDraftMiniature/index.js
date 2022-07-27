const fs = require("fs");
const path = require("path");
const { draftDir } = require("../paths");
const templateFile = path.join(__dirname, "miniature-template.md");

/**
 * Create a draft entry for the specified slug in the draft directory
 *
 * @param   {String}  slug
 */
const createDraftMiniature = (slug) => {
  const newSlug = path.parse(slug).name;
  const newPath = path.join(draftDir, newSlug);
  const newMarkdownFile = path.join(newPath, `${newSlug}.md`);

  // Raise an exception if the template file is missing
  if (!fs.existsSync(templateFile)) {
    throw new Error(`Template file (${templateFile}) is missing.`);
  }

  console.log(`Creating template for '${newSlug}'`);

  // Create the miniature's directory if needed
  if (!fs.existsSync(newPath)) {
    console.log("    creating directory...");
    fs.mkdirSync(newPath);
  }

  // Don't recreate the markdown file if it already exists
  if (fs.existsSync(newMarkdownFile)) {
    return console.log("    WARNING: .md file already exists.  Skipping.");
  }

  // Write new markdown file, but pre-set the slug frontmatter value
  console.log("    creating .md file...");
  const templateData = fs.readFileSync(templateFile, "utf-8");
  const newData = templateData.replace(new RegExp("miniature-template", "g"), newSlug);
  fs.writeFileSync(newMarkdownFile, newData, "utf-8");
};

module.exports = createDraftMiniature;
