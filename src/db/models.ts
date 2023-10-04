import mongoose from "mongoose";
import { bookSchema, userSchema } from "./schema.js";

// The first argument `Users` is the name of the collection which MongoDB
//  will create as `users`.
export const User = mongoose.model("Users", userSchema);
export const Book = mongoose.model("Book", bookSchema);
