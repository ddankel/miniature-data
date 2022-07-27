const paths = require("../paths");
const frontmatterFromFile = require("../frontmatterFromFile");

const allMiniatures = paths.allMarkdownFiles;
const miniatureStatuses = [];

allMiniatures.forEach((miniatureFile) => {
  const frontmatter = frontmatterFromFile(miniatureFile);

  const status = {
    slug: frontmatter.slug,
    line: frontmatter.line && frontmatter.line.join(" > "),
    minidb: "live",
    gallery: "live",
    status: frontmatter.status || "painted",
  };

  if (miniatureFile.includes("/_drafts/")) {
    status.minidb = "draft";
    status.gallery = "draft";
  }

  if (miniatureFile.includes("/_archive/")) {
    status.minidb = "hidden";
    status.gallery = "hidden";
  }

  if (miniatureFile.includes("__minidb")) status.gallery = "hidden";
  if (miniatureFile.includes("__gallery")) status.minidb = "hidden";
  if (!!frontmatter?.minidb?.todo) status.minidb = "todo";
  if (!!frontmatter?.gallery?.todo) status.gallery = "todo";

  miniatureStatuses.push(status);
});

module.exports = miniatureStatuses;
