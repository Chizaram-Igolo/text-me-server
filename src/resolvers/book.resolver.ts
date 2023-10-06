import Book from "../models/book.model.js";

const bookResolver = {
  Query: {
    books: async () => await Book.find(),
    book: async (_, { _id }) => await Book.findById(_id),
  },

  Mutation: {
    addBook: async (_, { input }) => {
      const { ...values } = input;
      const book = new Book(values);
      console.log("book", book);
      await book.save();
      return book;
    },

    updateBook: async (_, { input }) => {
      const { id, ...update } = input;
      const book = (
        await Book.findByIdAndUpdate(id, update, { new: true })
      ).toObject();
      return book;
    },
    deleteBook: async (_, { id }) => await Book.findByIdAndRemove(id),
  },
};

export default bookResolver;
