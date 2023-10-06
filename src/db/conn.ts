import mongoose, { ConnectOptions } from "mongoose";

/***
 * MongoDB connection
 * with events to watch for when the database is `connected`
 * or `disconnected` or `error`
 */
export const mongoInstance = mongoose.connect(
  "mongodb://127.0.0.1:27017/text-me",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions
);

export const conn = mongoose.connection;
