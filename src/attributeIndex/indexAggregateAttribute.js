const frontmatterFromFile = require("../frontmatterFromFile");

const indexAggregateAttribute = (attributeName, markdownFiles) => {
  let attributeList = [];

  markdownFiles.forEach((file) => {
    const frontmatter = frontmatterFromFile(file);
    const thisFilesAttributes = frontmatter[attributeName].join(" > ");
    attributeList = [...attributeList, thisFilesAttributes];
  });

  const uniqueAttributes = [...new Set(attributeList)];
  return uniqueAttributes.sort();
};

module.exports = indexAggregateAttribute;
