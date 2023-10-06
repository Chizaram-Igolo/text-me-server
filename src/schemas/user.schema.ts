const userSchema = `#graphql 
  input RegisterInput {
    firstname: String!
    lastname: String! 
    username: String! 
    email: String! 
    password: String!
  } 

  input LoginInput {
    email: String! 
    password: String!
  } 

  type Query { 
    users: [User!]!
    user(id: ID!): User!
  }

  type Mutation {
    register(
      firstname: String!
      lastname: String! 
      username: String! 
      email: String! 
      password: String!
    ): User!
    login(
      email: String! 
      password: String!
    ): User!
  }
`;

export default userSchema;
