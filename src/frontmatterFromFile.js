const fs = require("fs");
const fm = require("front-matter");

const frontmatterFromFile = (file) => fm(fs.readFileSync(file, "utf8")).attributes;

module.exports = frontmatterFromFile;
