import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Schemas and Resolvers
import allTypeDefs from "./schemas/index.schema.js";
import allResolvers from "./resolvers/index.resolver.js";

// context
import context from "./utils/context.js";

import { mongoInstance, conn } from "./db/conn.js";

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
  const server = new ApolloServer({
    typeDefs: allTypeDefs,
    resolvers: allResolvers,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: context,
  });

  console.log(`Server ready at: ${url}`);
});
