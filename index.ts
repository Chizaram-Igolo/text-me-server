import { ApolloServer } from "@apollo/server";
import mongoose, { ConnectOptions } from "mongoose";
import { startStandaloneServer } from "@apollo/server/standalone";

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/text-me", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

const typeDefs = `#graphql
    # Schema 

    type User {
        id: ID!
        username: String!
        email: String!
    }

    type Query {
        hello: String 
        getUser(id: ID!): User
    }  

    type Mutation {
        register(username: String!, email: String!, password:String!): User 
        login(email: String!, password: String!): User
    }
`;

const resolvers = {
  Query: {
    getUser: async ({ id }) => {},
    hello: () => "Hello, World!",
  },
  Mutation: {
    register: async ({ username, email, password }) => {},
    login: async ({ email, password }) => {},
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });

console.log(`Server ready at: ${url}`);
