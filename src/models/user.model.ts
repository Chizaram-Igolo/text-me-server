import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
});

const User = model("User", userSchema);
export default User;
