const { allMarkdownFiles } = require("../src/paths");
const { indexAttribute, indexAggregateAttribute } = require("../src/attributeIndex");

/**
 * ACTION: Build an aggregate list of all values in the indexable attributes
 *
 * Attribute values are aggregated by attribute in the attributeDictionary variable
 */

// Holding object to aggregate attributes into
const attributeDictionary = {};

/**
 * Attributes that should have lists compiled
 *
 * An array of valid values will be created for each of the following
 */
const indexableAttributes = ["genre", "race", "archetype", "weapons", "armor", "status"];
indexableAttributes.forEach((attributeName) => {
  attributeDictionary[attributeName] = indexAttribute(attributeName, allMarkdownFiles);
});

// Attributes that are arrays that should be aggregated and added to the dictionary.  For example:
//
//     line:
//       - a
//       - b
//       - c
//
// Would add "a > b > c" to the dictionary
const aggregatableAttributes = ["line"];
aggregatableAttributes.forEach((attributeName) => {
  attributeDictionary[attributeName] = indexAggregateAttribute(attributeName, allMarkdownFiles);
});

console.log(attributeDictionary);
