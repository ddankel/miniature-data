const fs = require("fs");
const path = require("path");
const getMarkdownFiles = require("./getMarkdownFiles");

const minisDir = path.join(__dirname, "../../minis");
const draftDir = path.join(__dirname, "../../mini_drafts");
const draftTemplate = path.join(draftDir, "miniature-template.md");
const markdownFiles = getMarkdownFiles(minisDir);
const draftMarkdownFiles = getMarkdownFiles(draftDir).filter(
  (item) => !item.includes("miniature-template.md")
);

module.exports = {
  minisDir,
  draftDir,
  draftTemplate,
  markdownFiles,
  draftMarkdownFiles,
};
