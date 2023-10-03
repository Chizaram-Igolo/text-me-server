import { users } from "./db.js";
import { UserModel } from "./db/models.js";

export const resolvers = {
  Query: {
    users: () => users,
    getUser: async (_, { id }) => {},
    hello: () => "Hello, World!",
  },
  Mutation: {
    register: async (_, { username, email, password }) => {
      console.log(username, email, password);

      const newUser = new UserModel({ username, email, password });

      newUser.save();
    },
    login: async (_, { email, password }) => {},
  },
};
