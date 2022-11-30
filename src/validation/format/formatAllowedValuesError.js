const chalk = require("chalk");

/**
 * Format an Ajv 'allowedValues' error
 *
 * @example error
 *    Sample Error:
 *    {
 *       keyword: 'enum',
 *       dataPath: '.armor[1]',
 *       schemaPath: '#/properties/armor/items/enum',
 *       params: { allowedValues: [Array] },
 *       message: 'should be equal to one of the allowed values',
 *       schema: [
 *         'cloak',
 *         'clothing',
 *         'leather',
 *         'mail',
 *         'plate',
 *         'powered armor',
 *         'robe',
 *         'shield'
 *       ],
 *       parentSchema: { type: 'string', enum: [Array] },
 *       data: 'clothings'
 *    }
 *
 * @example output
 *    invalid value bizbuz for field foo
 *
 * @param  {Object}   error
 */
const formatAllowedValuesError = (error) => {
  const invalid = chalk.red("invalid");
  const value = chalk.red(error.data);
  const fieldName = chalk.whiteBright(error.schemaPath.split("/")[2]);

  console.log(`    ${invalid} value ${value} for field ${fieldName} `);
};

module.exports = formatAllowedValuesError;
