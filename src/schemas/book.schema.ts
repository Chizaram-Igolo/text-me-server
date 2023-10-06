const bookSchema = `#graphql 
  input AddBookInput {
    title: String!
    author: String! 
    description: String! 
    publishedDate: String!
  } 

  input UpdateBookInput {
    id: ID! 
    title: String 
    author: String 
    description: String 
    publishedDate: String
  } 
  
  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String!
    publishedDate: String!
  }

  type Query {
    books: [Book]!
    book(id: ID!): Book!
  }

  type Mutation {
    addBook(
      title: String!
      author: String! 
      description: String! 
      publishedDate: String!
    ): Book!
    updateBook(
      id: ID! 
      title: String 
      author: String 
      description: String 
      publishedDate: String): Book! 
    deleteBook(id: ID!): Book
  }
`;

export default bookSchema;
