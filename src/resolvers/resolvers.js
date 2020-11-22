import User from "../models/user";

const resolvers = {
  Query: {
    user: (parent, args, context, info) => {return User.findById(args.id)},
    users: (parent, args, context, info) => {return User.find()},
  },
  Mutation: {
    signup: (parent, args, context, info) => {return User.create(args)},

  },
};

export default resolvers;
