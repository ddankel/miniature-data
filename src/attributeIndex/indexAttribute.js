const frontmatterFromFile = require("../frontmatterFromFile");

/**
 * Index a frontmatter attribute
 *
 * @param   {String}  attributeName  The attribute to index
 * @param   {Array}   markdownFiles  The markdown files to iterate through
 *
 * @return  {Array}                  List of unique values for the specified attribute
 */
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
