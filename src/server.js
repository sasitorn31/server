import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs, resolvers } from "../schema/index";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
