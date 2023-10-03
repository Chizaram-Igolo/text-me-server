import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  id: Schema.ObjectId,
  firstname: String,
  lastname: String,
  username: String,
  email: String,
});
