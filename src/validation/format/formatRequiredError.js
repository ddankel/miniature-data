const chalk = require("chalk");

/**
 * Format an Ajv 'required' error
 *
 * @example error
 *    Sample Error:
 *    {
 *      instancePath: '',
 *      schemaPath: '#/required',
 *      keyword: 'required',
 *      params: { missingProperty: 'painted' },
 *      message: "must have required property 'painted'",
 *      schema: [ 'painted' ],
 *      parentSchema: {
 *        type: 'object',
 *        properties: [Object],
 *        required: [Array],
 *        additionalProperties: false
 *      },
 *      data: {
 *        slug: 'female-elf-fighter',
 *        name: 'Female Elf Figher',
 *        sku: '73410 Female Elf Fighter',
 *        line: [Array],
 *        status: 'wip',
 *        photos: [Array],
 *        weapons: [Array],
 *        armor: [Array],
 *        race: [Array],
 *        quantity: 1
 *      }
 *    }
 *
 * @example output
 *    missing field painted
 *
 * @param  {Object}   error
 */
const formatRequiredError = (error) => {
  output = `    ${chalk.red("missing")} field ${chalk.red(error.params.missingProperty)}`;
  console.log(output);
};

module.exports = formatRequiredError;
