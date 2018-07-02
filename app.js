'use strict';

import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';

import typeDefs from './schema';
import resolvers from './resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Database successfully connected.\n---------------------------------------');
  }, (err) => {
    // eslint-disable-next-line no-console
    console.error('Database not connected.\n' + err.message);
    process.exit();
  });

const Cat = mongoose.model('Cat', { name: String });

// Init App
const app = express();

const graphqlEndpoint = '/graphql';

app.use(graphqlEndpoint, bodyParser.json(), graphqlExpress({
  schema,
  context: {
    Cat
  }
}));
app.use('/graphiql', graphiqlExpress({ endpointURL: graphqlEndpoint }));

// Set Port
app.set('port', (process.env.PORT || 4000));
// eslint-disable-next-line no-unused-vars
let server = app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('---------------------------------------\n' +
    'Web server is running in ' + app.get('env') + ' on port ' + app.get('port') +
    '\nPress Ctrl-C to terminate.');
  // + "\n---------------------------------------");
});

// module.exports = app;
