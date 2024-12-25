const {gql} = require("apollo-server-express");


const userResolver = {
    Query: {
        getUser :(parent, arg, context, info) => {
            
        }
    },
    Mutation: {
        createUser: (parent, arg, context, info) => {

        }
    }
}

module.exports = {
    userResolver
} 