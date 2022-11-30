const isDevelopment = process.env.NODE_ENV === "development";

/**
 * If the miniature (frontmatter) provided should be published on the Gallery page
 *
 * A miniature should be published if gallery.status is 'published' or blank.
 * It is also published if node is currently operating in development mode and
 * gallery.status is 'todo' or 'draft'.
 *
 * @param   {Object}  frontmatter  Frontmatter of the miniature in question
 *
 * @return  {Boolean}
 */
const isPublishedOnGallery = (frontmatter) => {
  const status = frontmatter.gallery?.status;

  if (!status) return true;
  if (isDevelopment && ["todo", "draft"].includes(status)) return true;
  return status === "published";
};

/**
 * If the miniature (frontmatter) provided should be published on the MiniDB page
 *
 * As above, but keying of minidb.status
 *
 * @param   {Object}  frontmatter  Frontmatter of the miniature in question
 *
 * @return  {Boolean}
 */
const isPublishedOnMiniDB = (frontmatter) => {
  const status = frontmatter.minidb?.status;

  if (!status) return true;
  if (isDevelopment && ["todo", "draft"].includes(status)) return true;
  return status === "published";
};

module.exports = {
  isPublishedOnGallery,
  isPublishedOnMiniDB,
};
