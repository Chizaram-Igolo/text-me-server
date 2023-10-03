import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const userSchema = new Schema({
  id: Schema.ObjectId,
  username: String,
  email: String,
});
