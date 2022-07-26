const validValues = {
  race: [
    "bugbear",
    "draconian",
    "dragonspawn",
    "dwarf",
    "elf",
    "goblin",
    "golem",
    "half-orc",
    "halfling",
    "hobgoblin",
    "human",
    "lizardfolk",
    "lupine",
    "obsidiman",
    "ogre",
    "orc",
    "ratfolk",
    "skaven",
    "stonechild",
    "tabaxi",
    "t'skrang",
    "troll",
    "undead",
    "unknown",
    "warjack",
  ],
  archetype: [
    "artificer",
    "cleric",
    "druid",
    "fighter",
    "monk",
    "paladin",
    "ranger",
    "rogue",
    "wizard",
  ],
  weapons: [
    "axe",
    "bow",
    "chain weapon",
    "claw",
    "club",
    "crossbow",
    "dagger",
    "grenade",
    "hammer",
    "instrument",
    "lance",
    "mace",
    "natural weapons",
    "pistol",
    "polearm",
    "rifle",
    "rocket pack",
    "scroll",
    "scythe",
    "spear",
    "spell effect",
    "staff",
    "standard",
    "sword",
    "sword-staff",
    "tome",
  ],
  armor: ["cloak", "clothing", "leather", "mail", "plate", "powered armor", "robe", "shield"],
  status: ["prepainted", "unpainted", "wip", "painted", "unassembled"],
  minidb: {
    status: ["hidden", "draft", "todo", "published"],
  },
  gallery: {
    status: ["hidden", "draft", "todo", "published"],
  },
};

module.exports = validValues;
