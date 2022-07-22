const fs = require("fs");
const path = require("path");

const paths = require("../../utils/paths");
const draftDir = paths.draftDir;
const templateFile = paths.draftTemplate;

/**
 * Creates a new miniature draft from the template
 *
 * Draft miniatures will be placed in draftDir defined above
 *
 * @param   {String}  slug  The miniature slug to create
 */
const createTemplate = (slug) => {
  const newSlug = path.parse(slug).name;
  const newPath = path.join(draftDir, newSlug);
  const newMarkdownFile = path.join(newPath, `${newSlug}.md`);

  console.log(`Creating template for '${newSlug}'`);
  if (!fs.existsSync(newPath)) {
    console.log("    creating directory...");
    fs.mkdirSync(newPath);
  }

  if (fs.existsSync(newMarkdownFile)) {
    return console.log("    WARNING: .md file already exists.  Skipping.");
  }

  // Write new markdown file, but pre-set the slug frontmatter value
  console.log("    creating .md file...");
  const templateData = fs.readFileSync(templateFile, "utf-8");
  const newData = templateData.replace(new RegExp("miniature-template", "g"), newSlug);
  fs.writeFileSync(newMarkdownFile, newData, "utf-8");
};

module.exports = createTemplate;
