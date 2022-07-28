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
  const fieldName = chalk.whiteBright(error.schemaPath.split("/")[2]);
  const expectedType = chalk.whiteBright(error.schema);

  output = `    ${chalk.red("invalid")} type for field ${fieldName}, expected ${expectedType} `;
  console.log(output);
};

module.exports = formatTypeError;
