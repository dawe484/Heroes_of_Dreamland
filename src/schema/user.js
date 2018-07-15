export default `
 
  type User {
    _id: String!
    username: String!
    email: String!
  }

  type Query {
    getUserByUsername(username: String!): User!
    allUsers: [User!]!
  }

  type Mutation {
    createUser(username: String!, email: String!): User!
  }

`;
