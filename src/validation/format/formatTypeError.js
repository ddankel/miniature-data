const chalk = require("chalk");

/**
 * Format an Ajv 'allowedValues' error
 *
 * @example error
 *    Sample Error:
 *    {
 *      instancePath: '/armor',
 *      schemaPath: '#/properties/armor/type',
 *      keyword: 'type',
 *      params: { type: 'array' },
 *      message: 'must be array',
 *      schema: 'array',
 *      parentSchema: { type: 'array', items: { type: 'string', enum: undefined } },
 *      data: 'shieldsss'
 *    }
 *
 * @example output
 *    invalid value bizbuz for field foo
 *
 * @param  {Object}   error
 */
const formatTypeError = (error) => {
  const invalid = chalk.red("invalid");
  const fieldName = chalk.whiteBright(error.schemaPath.split("/")[2]);
  const expectedType = chalk.whiteBright(error.schema);

  console.log(`    ${invalid} type for field ${fieldName}, expected ${expectedType} `);
};

module.exports = formatTypeError;
