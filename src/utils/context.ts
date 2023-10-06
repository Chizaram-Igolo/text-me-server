import jwt from "jsonwebtoken";

import throwCustomeError, { ErrorTypes } from "./error-handler.js";
import { SECRET_KEY } from "./constants.js";

const getUser = async (token) => {
  try {
    if (token) {
      const user = jwt.verify(token.replace("Bearer ", ""), SECRET_KEY);
      return user;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const context = async ({ req, res }) => {
  if (
    req.body.operationName?.toLowerCase() === "register" ||
    req.body.operationName?.toLowerCase() === "login"
  ) {
    return {};
  }

  const token = req.headers.authorization || "";

  const user = await getUser(token);

  if (!user) {
    throwCustomeError("User is not Authenticated", ErrorTypes.UNAUTHENTICATED);
  }

  return { user };
};

export default context;
