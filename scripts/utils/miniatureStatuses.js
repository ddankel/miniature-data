const paths = require("./paths");
const getFrontmatter = require("./getFrontmatter");

const allMiniatures = [...paths.markdownFiles, ...paths.draftMarkdownFiles];
const miniatureStatuses = [];

allMiniatures.forEach((miniatureFile) => {
  const frontmatter = getFrontmatter(miniatureFile);

  const status = {
    slug: frontmatter.slug,
    line: frontmatter.line && frontmatter.line.join(" > "),
    minidb: "live",
    gallery: "live",
  };

  if (miniatureFile.includes(paths.draftDir)) {
    status.minidb = "draft";
    status.gallery = "draft";
  }

  console.log("mF", miniatureFile);

  if (miniatureFile.includes(".minidb")) status.gallery = "hidden";
  if (miniatureFile.includes(".gallery")) status.minidb = "hidden";
  if (!!frontmatter?.minidb?.todo) status.minidb = "todo";
  if (!!frontmatter?.gallery?.todo) status.gallery = "todo";

  miniatureStatuses.push(status);
});

module.exports = miniatureStatuses;
