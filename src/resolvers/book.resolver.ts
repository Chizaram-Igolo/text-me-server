import Book from "../models/book.model.js";

const bookResolver = {
  Query: {
    books: async () => await Book.find(),
    book: async (_, { _id }) => await Book.findById(_id),
  },

  Mutation: {
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

export default bookResolver;
