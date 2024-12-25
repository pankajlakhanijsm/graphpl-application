const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

const bookResolver = {
  Query: {
    getBooks: () => {
      return books;
    },
  },
};

module.exports = {
  bookResolver,
};
