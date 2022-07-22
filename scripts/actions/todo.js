const miniatureStatuses = require("../utils/miniatureStatuses");
const printMiniatureStatuses = require("../utils/printMiniatureStatuses");

const todoMiniatures = miniatureStatuses.filter((mini) => {
  return ["draft", "todo"].includes(mini.minidb) || ["draft", "todo"].includes(mini.gallery);
});

printMiniatureStatuses(todoMiniatures);
