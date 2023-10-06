export const typeDefs = `#graphql
  type User {
    _id: ID! 
    firstname: String!
    lastname: String!
    username: String!
    email: String! 
    password: String! 
    token: String
  } 

  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String!
    publishedDate: String!
  }
  

  type Mutation {
    register(firstname: String!, lastname: String!, username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User! 
    addBook(title: String!, author: String!, description: String!, publishedDate: String!): Book!
    updateBook(id: ID!, title: String, author: String, description: String, publishedDate: String): Book
    deleteBook(id: ID!): Book
  }

  # Not optional
  type Query { 
    users: [User!]!
    user(id: ID!): User!
    books: [Book]!
    book(id: ID!): Book!
  }
`;
