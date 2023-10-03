export const typeDefs = `#graphql
  type User {
    id: ID! 
    firstname: String!
    lastname: String!
    username: String!
    email: String! 
  }

  type Mutation {
    register(firstname: String!, lastname: String!, username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
  }

  # Not optional
  type Query {
    hello: String
    users: [User]
    getUser(id: ID!): User
  }
`;
