const chalk = require("chalk");

const printMiniatureStatuses = (miniatureStatuses) => {
  const miniatureLines = [...new Set([...miniatureStatuses.map((item) => item.line)])].sort();

  const slugLength = miniatureStatuses
    .map((item) => item.slug)
    .reduce((a, b) => (a.length > b.length ? a : b)).length;

  const printStatus = (mini) => {
    const segments = [
      `   ${mini.slug.padEnd(slugLength, ".")}..`,
      paintedLabel(mini.status),
      `gallery: ${statusLabel(mini.gallery)}`,
      `minidb: ${statusLabel(mini.minidb)}`,
    ];
    console.log(segments.join("   "));
  };

  const paintedLabel = (label) => {
    switch (label) {
      case "prepainted":
        return chalk.white(label.padEnd(11));
      case "unpainted":
        return chalk.dim(label.padEnd(11));
      case "wip":
        return chalk.dim(label.padEnd(11));
      case "painted":
        return chalk.white(label.padEnd(11));
      case "unassembled":
        return chalk.dim(label.padEnd(11));
    }
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
        return chalk.dim.red("hidden");
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
