const userTypeDef = `#graphql
  type User {
    _id: ID! 
    firstname: String!
    lastname: String!
    username: String!
    email: String! 
    password: String! 
    token: String
  } 
`;

export default userTypeDef;
