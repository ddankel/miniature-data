const validValues = require("./validValues");

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
    race: {
      type: "array",
      items: {
        type: "string",
        enum: validValues.race,
      },
    },
    archetype: {
      type: "array",
      items: {
        type: "string",
        enum: validValues.archetype,
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
        enum: validValues.armor,
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
        status: {
          type: "string",
          enum: validValues.minidb.status,
        },
      },
      additionalProperties: false,
    },
    gallery: {
      type: "object",
      properties: {
        status: {
          type: "string",
          enum: validValues.minidb.status,
        },
      },
      additionalProperties: false,
    },
  },
  required: ["slug", "name", "line", "photos"],
  additionalProperties: false,
};

module.exports = schema;
