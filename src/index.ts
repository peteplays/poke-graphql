import { ApolloServer } from 'apollo-server';

import typeDefs from './types';
import resolvers from './resolvers';
import config  from './config';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({
  port: config.envs.port
}).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
