const paths = require("../paths");
const frontmatterFromFile = require("../frontmatterFromFile");

const allMiniatures = paths.allMarkdownFiles;
const miniatureStatuses = [];

allMiniatures.forEach((miniatureFile) => {
  const frontmatter = frontmatterFromFile(miniatureFile);

  const status = {
    slug: frontmatter.slug,
    line: frontmatter.line && frontmatter.line.join(" > "),
    minidb: frontmatter.minidb?.status || "published",
    gallery: frontmatter.gallery?.status || "published",
    status: frontmatter.status || "painted",
  };

  if (miniatureFile.includes("/_archive/")) {
    status.minidb = "hidden";
    status.gallery = "hidden";
  }

  miniatureStatuses.push(status);
});

module.exports = miniatureStatuses;
