import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { SECRET_KEY } from "../utils/constants.js";

import User from "../models/user.model.js";

const userResolver = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { _id }) => await User.findById(_id),
  },

  Mutation: {
    register: async (_, { input }) => {
      const { username, password, ...rest } = input;

      let res = null;

      try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
          throw new Error("Username already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ ...rest, username, password: hashedPassword });
        await user.save();
        res = user;
      } catch (error) {
        res = error;
      }

      return res;
    },

    login: async (_, { input }) => {
      const { email, password } = input;

      let res = null;

      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("User not found");
        }

        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
          throw new Error("Invalid password");
        }

        const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
          expiresIn: "24h",
        });

        res = { token, ...user.toObject() };
      } catch (error) {
        res = error;
      }

      return res;
    },
  },
};

export default userResolver;
