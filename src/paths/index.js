const path = require("path");
const getMarkdownFiles = require("./getMarkdownFiles");

const minisDir = path.join(__dirname, "../../minis");
const draftDir = path.join(__dirname, "../../minis/_drafts");
const allMarkdownFiles = getMarkdownFiles(minisDir);

module.exports = {
  minisDir,
  draftDir,
  allMarkdownFiles,
};
