const getMarkdownFiles = require("../utils/getMarkdownFiles");
const getFrontmatter = require("../utils/getFrontmatter");
const paths = require("../utils/paths");

/**
 * ACTION: Build an aggregate list of all values in the indexable attributes
 *
 * Attribute values are aggregated by attribute in the attributeDictionary variable
 */

const minisPath = paths.minisDir;

// Attributes that should have lists compiled
const indexableAttributes = ["weapons", "armor", "race", "status"];

// Attributes that are arrays that should be aggregated and added to the dictionary.  For example:
//
//     line:
//       - a
//       - b
//       - c
//
// Would add "a > b > c" to the dictionary
const aggregatableAttributes = ["line"];

// Holding object to aggregate attributes into
const attributeDictionary = {};

getMarkdownFiles(minisPath).forEach((file) => {
  const frontmatter = getFrontmatter(file);

  indexableAttributes.forEach((i) => {
    const currentAttributeList = attributeDictionary[i] || [];
    const thisMiniAttributeList = [frontmatter[i]].flat();
    const uniqueAttributeList = [...new Set([...currentAttributeList, ...thisMiniAttributeList])];
    attributeDictionary[i] = uniqueAttributeList.sort();
  });

  aggregatableAttributes.forEach((i) => {
    if (!attributeDictionary[i]) attributeDictionary[i] = [];
    attributeDictionary[i] = [
      ...new Set([...attributeDictionary[i], frontmatter[i].join(" > ")]),
    ].sort();
  });
});

console.log(attributeDictionary);
