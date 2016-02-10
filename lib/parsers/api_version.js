var trim = require('../utils/trim');

var ParameterError = require('../errors/parameter_error');

function parse(content) {
    content = trim(content);

    if (content.length === 0)
        return null;

    // if ( !(typeof content === 'number'))
    //     throw new ParameterError('Version format not valid.',
    //                              'apiVersion', '@apiVersion number', '@apiDefine 1');

    return {
        version: content
    };
}

/**
 * Exports
 */
module.exports = {
    parse     : parse,
    path      : 'local',
    method    : 'insert',
    extendRoot: true
};
