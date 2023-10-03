import { users } from "./db.js";
import { UserModel } from "./db/models.js";

export const resolvers = {
  Query: {
    users: () => users,
    getUser: async (_, { id }) => {},
    hello: () => "Hello, World!",
  },
  Mutation: {
    register: async (_, values) => {
      const newUser = new UserModel(values);

      let data = null;

      try {
        const doc = (await newUser.save()).toObject();
        const { _id, ...rest } = doc;
        data = { ...rest, id: _id };
      } catch (error) {
        data = error;
      }

      return data;
    },
    login: async (_, { email, password }) => {},
  },
};
