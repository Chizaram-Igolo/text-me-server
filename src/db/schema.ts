import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

export const bookSchema = new Schema({
  title: { type: String, unique: true },
  author: String,
  description: String,
  publishedDate: String,
});
