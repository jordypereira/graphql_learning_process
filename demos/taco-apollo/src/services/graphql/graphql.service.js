'use strict';

const hooks = require('./graphql.hooks');
import { ApolloServer, gql } from 'apollo-server';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';
import schemaString from './schema';

module.exports = function(app) {
  const schema = makeExecutableSchema({
    typeDefs: schemaString,
    resolvers,
  });

  app.use(
    '/graphql',
    new ApolloServer({
      schema: schema,
    }),
  );

  app.use(
    '/graphiql',
    gql({
      endpointURL: '/graphql',
    }),
  );
};
