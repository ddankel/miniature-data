const chalk = require("chalk");

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
module.exports = statusLabel;
