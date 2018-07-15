import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

import config from './configDB';

// eslint-disable-next-line no-unused-vars
// import User from './models/user';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './schema')));
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, './resolvers'))
);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const Cat = mongoose.model('Cat', {
  name: String,
});

const User = mongoose.model('User', {
  username: String,
  email: String,
});

// Init App
const app = express();

const graphqlEndpoint = '/graphql';

app.use(
  graphqlEndpoint,
  bodyParser.json(),
  graphqlExpress({
    schema,
    context: {
      Cat,
      User,
    },
  })
);
app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: graphqlEndpoint,
  })
);

// Set Port
app.set('port', process.env.PORT || 4000);
// eslint-disable-next-line no-unused-vars
let server = app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(
    '---------------------------------------\n' +
      'Web server is running in ' +
      app.get('env') +
      ' on port ' +
      app.get('port') +
      '\nPress Ctrl-C to terminate.'
  );
  // + "\n---------------------------------------");
});

function newFunction() {
  'use strict';
}
// module.exports = app;
