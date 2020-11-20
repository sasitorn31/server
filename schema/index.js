import { gql } from "apollo-server-express";

const user = [
  {
    id: "1",
    name: "สมชาย",
    username: "Somchai",
    password: "123456",
    email: "somchai12@gmail.com",
  },
  {
    id: "2",
    name: "D",
    username: "D",
    password: "123455",
    email: "D@gmail.com",
  },
  {
    id: "3",
    name: "v",
    username: "v",
    password: "157655",
    email: "V@gmail.com",
  },
  {
    id: "4",
    name: "p",
    username: "p",
    password: "147441",
    email: "P@gmail.com",
  },
  {
    id: "5",
    name: "War",
    username: "t",
    password: "789456",
    email: "T@gmail.com",
  },
  {
    id: "6",
    name: "Boy",
    username: "Sompob",
    password: "raknasompob",
    email: "Boy_sompob@gmail.com",
  },
];

export const resolvers = {
  Query: {
    user: (parent, args, context, info) => {
      return user.filter((user) => user.id.toString() === args.id)[0];
    },
    users: (parent, args, context, info) => {return user},
  },
};

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    password: String!
    email: String!
  }

  type Query {
    user(id: ID!): User
    users: [User]!
  }
`;
