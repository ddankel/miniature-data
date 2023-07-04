const validTags = {
  genre: ["fantasy", "magitek", "monstrosity", "sci-fi"],
  race: [
    "blightspawn",
    "catfolk",
    "dragonfolk",
    "dwarf",
    "elf",
    "goblinoid",
    "golem",
    "half-orc",
    "halfling",
    "human",
    "lizardfolk",
    "obsidiman",
    "ogre",
    "orc",
    "ratfolk",
    "troll",
    "undead",
    "unknown",
    "warjack",
    "wulfen",
  ],
  archetype: [
    "artificer",
    "cleric",
    "druid",
    "fighter",
    "monk",
    "mounted",
    "paladin",
    "ranger",
    "rogue",
    "wizard",
  ],
  weapons: [
    "axe",
    "battle standard",
    "bow",
    "chain weapon",
    "club",
    "crossbow",
    "dagger",
    "explosives",
    "fighting claw",
    "firearm",
    "great weapon",
    "hammer",
    "musical instrument",
    "mace",
    "natural weapons",
    "polearm",
    "scythe",
    "spear",
    "spell effect",
    "spell focus",
    "staff",
    "sword",
    "sword-staff",
    "whip",
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

module.exports = validTags;
