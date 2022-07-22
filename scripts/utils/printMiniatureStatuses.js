const chalk = require("chalk");

const printMiniatureStatuses = (miniatureStatuses) => {
  const miniatureLines = [...new Set([...miniatureStatuses.map((item) => item.line)])].sort();

  const slugLength = miniatureStatuses
    .map((item) => item.slug)
    .reduce((a, b) => (a.length > b.length ? a : b)).length;

  const printStatus = (mini) => {
    const segments = [
      `   ${mini.slug.padEnd(slugLength, ".")}..`,
      `gallery: ${statusLabel(mini.gallery)}`,
      `minidb: ${statusLabel(mini.minidb)}`,
    ];
    console.log(segments.join("   "));
  };

  const statusLabel = (label) => {
    switch (label) {
      case "live":
        return chalk.green("live  ");
      case "draft":
        return chalk.yellow("draft ");
      case "todo":
        return chalk.hex("FFA500")("todo  ");
      case "hidden":
        return chalk.red("hidden");
      default:
        return "?????";
    }
  };

  miniatureLines.forEach((line) => {
    const miniaturesInLine = miniatureStatuses.filter((item) => item.line === line);

    if (miniaturesInLine.length) {
      console.log(line);
      miniaturesInLine.forEach((mini) => printStatus(mini));
      console.log();
    }
  });
};

module.exports = printMiniatureStatuses;
