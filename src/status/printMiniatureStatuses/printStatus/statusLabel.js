const chalk = require("chalk");

const length = "published".length;

const statusLabel = (label) => {
  switch (label) {
    case "published":
      return chalk.green("published".padEnd(length));
    case "draft":
      return chalk.yellow("draft".padEnd(length));
    case "todo":
      return chalk.hex("FFA500")("todo".padEnd(length));
    case "hidden":
      return chalk.dim.red("hidden".padEnd(length));
    default:
      return "?????";
  }
};
module.exports = statusLabel;
