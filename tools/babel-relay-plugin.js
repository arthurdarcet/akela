import babelRelayPlugin from 'babel-relay-plugin';
import {introspectionQuery} from 'graphql/utilities';

import schema from '../build/schema.json';


export default babelRelayPlugin(schema.data, {abortOnError: true});
