import babelRelayPlugin from 'babel-relay-plugin';
import {introspectionQuery} from 'graphql/utilities';
import request from 'sync-request';


var graphqlHubUrl = 'http://www.GraphQLHub.com/graphql';
var response = request('GET', graphqlHubUrl, {
    qs: {
        query: introspectionQuery
    }
});

var schema = JSON.parse(response.body.toString('utf-8'));

export default babelRelayPlugin(schema.data, {abortOnError: true});
