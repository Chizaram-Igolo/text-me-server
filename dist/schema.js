import { ApolloServer } from "@apollo/server";
const typeDefs = `#graphql
    # Schema

    type Query {
        hello: String
    }
`;
const resolvers = {
    Query: {
        hello: () => "Hello, World!",
    },
};
export const server = new ApolloServer({ typeDefs, resolvers });
