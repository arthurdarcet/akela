import babelRelayPlugin from 'babel-relay-plugin';
import {introspectionQuery} from 'graphql/utilities';

import schema from '../server/schema';


var data = async () => {
    var result = await (graphql(schema, introspectionQuery));
    if (result.errors)
        console.error('ERROR introspecting schema: ', result.errors);
    return result.data;
}();

export default babelRelayPlugin(data, {abortOnError: true});
