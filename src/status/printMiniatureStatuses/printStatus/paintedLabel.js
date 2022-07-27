const chalk = require("chalk");

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

module.exports = paintedLabel;
