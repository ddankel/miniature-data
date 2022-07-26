const longestSlugLength = require("./longestSlugLength");
const printStatus = require("./printStatus");

/**
 * Display formatted versions of the status objects provided
 *
 * @param   {Array}  miniatureStatuses
 */
const printMiniatureStatuses = (miniatureStatuses) => {
  const miniatureLines = [...new Set([...miniatureStatuses.map((item) => item.line)])].sort();

  const maxSlugLength = longestSlugLength(miniatureStatuses);

  miniatureLines.forEach((line) => {
    const miniaturesInLine = miniatureStatuses.filter((item) => item.line === line);

    if (miniaturesInLine.length) {
      console.log(line);
      miniaturesInLine.forEach((mini) => printStatus(mini, maxSlugLength));
      console.log();
    }
  });
};

module.exports = printMiniatureStatuses;
