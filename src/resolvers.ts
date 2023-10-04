import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { users } from "./db.js";
import { Book, User } from "./db/models.js";
import { SECRET_KEY } from "./utils/constants.js";

export const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { _id }) => await User.findById(_id),
    books: async () => await Book.find(),
    book: async (_, { _id }) => await Book.findById(_id),
  },

  Mutation: {
    register: async (_, values) => {
      const { username, password, ...rest } = values;

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

    login: async (_, { email, password }) => {
      let res = null;

      try {
        const user = await User.findOne({ email });
        console.log(user);
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
        console.log(res);
      } catch (error) {
        res = error;
      }

      return res;
    },

    addBook: async (_, values) => {
      const book = new Book(values);
      await book.save();
      return book;
    },

    updateBook: async (_, { id, ...update }) =>
      await Book.findByIdAndUpdate(id, update, { new: true }),
    deleteBook: async (_, { id }) => await Book.findByIdAndRemove(id),
  },
};
