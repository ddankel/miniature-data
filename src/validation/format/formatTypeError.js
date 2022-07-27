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
  output = `    ${chalk.red("invalid")} type for field ${chalk.whiteBright(
    error.instancePath.split("/")[1]
  )}, expected ${error.schema} `;
  console.log(output);
};

module.exports = formatTypeError;
