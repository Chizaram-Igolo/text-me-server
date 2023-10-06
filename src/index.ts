import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Schema and resolver
import { typeDefs } from "./graphqlSchema.js";

import { mongoInstance, conn } from "./db/conn.js";
import context from "./utils/context.js";
import resolvers from "./resolvers/index.resolver.js";

// /* DB connection status logging */

conn.once("open", () => {
  console.log("Database is connected successfully");
});

conn.on("disconnected", () => {
  console.log("database is disconnected successfully");
});

conn.on("error", (error) => {
  console.error("MongoDB connections error:", error);
});

mongoInstance.then(async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: context,
  });

  console.log(`Server ready at: ${url}`);
});
