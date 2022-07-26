const frontmatterFromFile = require("../frontmatterFromFile");

/**
 * Index an aggregate attribute
 *
 * Attributes that are arrays that should be aggregated and added to the dictionary.  For example:
 *
 * @example
 *   line:
 *     - a
 *     - b
 *     - c
 *
 *   Would add "a > b > c" to the dictionary
 *
 * @param   {String}  attributeName  The attribute to index
 * @param   {Array}   markdownFiles  The markdown files to iterate through
 *
 * @return  {Array}                  List of unique values for the specified attribute
 */
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
