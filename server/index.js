import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema';


mongoose.connect('mongodb://localhost/akela');

var app = express();

app.use('/graphql', graphqlHTTP({schema: schema}));

app.listen(3000, function() {
    console.log('Graphql server listening at http://127.0.0.1:3000');
});
