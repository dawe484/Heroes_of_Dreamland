export default `
 
  type User {
    _id: String!
    username: String!
    email: String!
    password: String!
    signup_time: String!
    timezone_offset: Int!
    local_signup_time: String!
    language: String!
    status: Boolean!
  }
  
  type Query {
    getUserByUsername(username: String!): User!
    getAllUsers: [User!]!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): User!
  }

`;
