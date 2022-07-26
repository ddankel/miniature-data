const paintedLabel = require("./paintedLabel");
const statusLabel = require("./statusLabel");

/**
 * Display the status line for the provided miniature data
 *
 * @param   {Object}  mini
 */
const printStatus = (mini, slugPadToLength) => {
  const segments = [
    `   ${mini.slug.padEnd(slugPadToLength, ".")}..`,
    paintedLabel(mini.status),
    `gallery: ${statusLabel(mini.gallery)}`,
    `minidb: ${statusLabel(mini.minidb)}`,
  ];
  console.log(segments.join("   "));
};

module.exports = printStatus;
