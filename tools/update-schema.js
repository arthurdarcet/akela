#!/usr/bin/env babel-node --optional es7.asyncFunctions

import fs from 'fs';
import path from 'path';
import schema from '../server/schema';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';


// Save JSON of full schema introspection for Babel Relay Plugin to use
async () => {
    var result = await (graphql(schema, introspectionQuery));
    if (result.errors) {
        console.error('ERROR introspecting schema: ', result.errors);
    } else {
        fs.writeFileSync(
            path.join(__dirname, '../build/schema.json'),
            JSON.stringify(result, null, 2)
        );
    }
}();

// Save user readable type system shorthand of schema
fs.writeFileSync(
    path.join(__dirname, '../build/schema.graphql'),
    printSchema(schema)
);
