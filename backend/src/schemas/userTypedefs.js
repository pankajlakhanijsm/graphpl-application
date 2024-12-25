const {gql} = require("apollo-server-express");


const userDefs = gql`
    type User {
        id: ID!,
        userName: String!,
        email: String!
    }
    type Query {
        getUser: [User]
    }

    input UserData {
        email: String!,
        userName: String!,
        password: String!,
        fullName: String!
    }

    type Mutation {
        createUser: (userData: UserData): User
    }
`;

module.exports = {
    userDefs
}