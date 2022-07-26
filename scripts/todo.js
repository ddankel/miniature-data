const { miniatureStatuses, printMiniatureStatuses } = require("../src/status");

const todoMiniatures = miniatureStatuses.filter((mini) => {
  return ["draft", "todo"].includes(mini.minidb) || ["draft", "todo"].includes(mini.gallery);
});

printMiniatureStatuses(todoMiniatures);
