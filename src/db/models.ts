import mongoose from "mongoose";
import { userSchema } from "./schema.js";

// The first argument `Users` is the name of the collection which MongoDB
//  will create as `users`.
export const UserModel = mongoose.model("Users", userSchema);
