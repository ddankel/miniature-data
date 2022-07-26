/**
 * Get the longest slug length for all miniatures in the array
 *
 * @param   {Array}
 */
const longestSlugLength = (miniatureStatuses) => {
  const slugArray = miniatureStatuses.map((item) => item.slug);
  const longestSlug = slugArray.reduce((a, b) => (a.length > b.length ? a : b));
  return longestSlug.length;
};

module.exports = longestSlugLength;
