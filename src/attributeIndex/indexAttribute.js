const frontmatterFromFile = require("../frontmatterFromFile");

const indexAttribute = (attributeName, markdownFiles) => {
  let attributeList = [];

  markdownFiles.forEach((file) => {
    const frontmatter = frontmatterFromFile(file);
    const thisFilesAttributes = [frontmatter[attributeName]].flat();

    attributeList = [...attributeList, ...thisFilesAttributes];
  });

  const uniqueAttributes = [...new Set(attributeList)];
  return uniqueAttributes.sort();
};

module.exports = indexAttribute;
