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

  type Query {
    books: [Book]!
    book(id: ID!): Book!
  }

  type Mutation {
    addBook(input: AddBookInput!): Book!
    updateBook(input: UpdateBookInput!): Book! 
    deleteBook(id: ID!): Book
  }
`;

export default bookSchema;
