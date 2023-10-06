import mongoose, { ConnectOptions } from "mongoose";

/***
 * MongoDB connection instance
 * and `conn` object that can listen to events to such as when
 * the database is `connected` to, `disconnected` from or has an `error`.
 */
export const conn = mongoose.connection;

const mongoInstance = mongoose.connect("mongodb://127.0.0.1:27017/text-me", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

export default mongoInstance;
