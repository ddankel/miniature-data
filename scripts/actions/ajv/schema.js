const deprecatedValues = {
  weapons: [null],
  armor: [null],
  race: ["lizardman", "cat"],
};

const validValues = {
  weapons: [
    "axe",
    "book",
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
  ],
  armor: ["cloak", "clothing", "leather", "mail", "plate", "powered armor", "robe", "shield"],
  race: [
    "draconian",
    "dragonspawn",
    "dwarf",
    "elf",
    "goblin",
    "golem",
    "half-orc",
    "halfling",
    "human",
    "lizardfolk",
    "lupine",
    "obsidiman",
    "ogre",
    "stonechild",
    "tabaxi",
    "t'skrang",
    "troll",
    "undead",
    "unknown",
    "warjack",
  ],
  status: ["prepainted", "unpainted", "wip", "painted", "unassembled", undefined],
};

const schema = {
  type: "object",
  properties: {
    slug: {
      type: "string",
    },
    name: {
      type: "string",
    },
    sku: {
      type: "string",
    },
    line: {
      type: "array",
      items: {
        type: "string",
      },
    },
    painted: {
      type: ["string", "integer"],
    },
    status: {
      type: "string",
    },
    photos: {
      type: "array",
      items: {
        type: "string",
      },
    },
    weapons: {
      type: "array",
      items: {
        type: "string",
        enum: validValues.weapons,
      },
    },
    armor: {
      type: "array",
      items: {
        type: "string",
        // enum: ["leather", "shield"],
        enum: validValues.armor,
      },
    },
    race: {
      type: "array",
      items: {
        type: "string",
        enum: validValues.race,
      },
    },
    quantity: {
      type: "integer",
    },
    recipes: {
      type: "array",
      items: {
        type: "string",
      },
    },
    gallery: {
      type: "object",
      properties: {
        todo: {
          type: "boolean",
        },
      },
      additionalProperties: false,
    },
    minidb: {
      type: "object",
      properties: {
        todo: {
          type: "boolean",
        },
      },
      additionalProperties: false,
    },
  },
  required: ["slug", "name", "line", "photos"],
  additionalProperties: false,
};

module.exports = schema;
