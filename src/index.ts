// Server library
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// Database driver
import mongooseInstance from "./db/conn.js";

// Schemas and Resolvers
import allTypeDefs from "./schemas/index.schema.js";
import allResolvers from "./resolvers/index.resolver.js";

// context
import context from "./utils/context.js";

mongooseInstance.then(async () => {
  console.log("Connection to MongoDB was successful.");
  const server = new ApolloServer({
    typeDefs: allTypeDefs,
    resolvers: allResolvers,
  });

  return startStandaloneServer(server, {
    listen: { port: 4000 },
    context: context,
  })
    .then((server) => {
      console.log(`Server ready at: ${server.url}`);
    })
    .catch((error) => {
      console.log(`An error occured: ${error}`);
    });
});
