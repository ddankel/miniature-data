const chalk = require("chalk");

/**
 * Format an Ajv 'additionalProperty' error
 *
 * @example error
 *    Sample Error:
 *    {
 *      instancePath: '',
 *      schemaPath: '#/additionalProperties',
 *      keyword: 'additionalProperties',
 *      params: { additionalProperty: 'ssphotos' },
 *      message: 'must NOT have additional properties',
 *      schema: false,
 *      parentSchema: {
 *        type: 'object',
 *        properties: {
 *          slug: [Object],
 *          name: [Object],
 *          sku: [Object],
 *          line: [Object],
 *          painted: [Object],
 *          status: [Object],
 *          photos: [Object],
 *          weapons: [Object],
 *          armor: [Object],
 *          race: [Object],
 *          quantity: [Object],
 *          recipes: [Object]
 *        },
 *        required: [ 'painted' ],
 *        additionalProperties: false
 *      },
 *      data: {
 *        slug: 'female-elf-fighter',
 *        name: 'Female Elf Figher',
 *        sku: '73410 Female Elf Fighter',
 *        line: [ 'WizKids', 'Pathfinder Deep Cuts' ],
 *        status: 'wip',
 *        ssphotos: [ './WizKids-Pathfinder73410-FemaleElfFighter.jpg' ],
 *        weapons: [ 'sword' ],
 *        armor: [ 'leather', 'shieldsss' ],
 *        race: [ 'elf' ],
 *        quantity: 1
 *      }
 *    }
 *
 * @example output
 *    invalid field doesnotexist
 *
 * @param  {Object}   error
 */
const formatAdditionalPropertyError = (error) => {
  output = `    ${chalk.red("invalid")} field ${chalk.red(error.params.additionalProperty)}`;
  console.log(output);
};

module.exports = formatAdditionalPropertyError;
