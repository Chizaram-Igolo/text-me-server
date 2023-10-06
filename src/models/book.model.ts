import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: String,
  author: String,
  description: String,
  publishedDate: String,
});

const Book = model("Book", bookSchema);
export default Book;
