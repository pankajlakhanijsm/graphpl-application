const { gql } = require("graphql-tag");

const bookTypedefs = gql`
  type Book {
    title: String!
    author: String!
  }
  type Query {
    getBooks: [Book!]!
  }
`;

module.exports = {
  bookTypedefs,
};
