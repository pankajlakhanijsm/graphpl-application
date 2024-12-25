const express = require("express");
const { bookTypedefs } = require("./src/schemas/bookTypedefs");
const { bookResolver } = require("./src/resolvers/bookResolver");
const { ApolloServer } = require("@apollo/server");
const cors = require("cors");
const { expressMiddleware } = require("@apollo/server/express4");

const startServer = async () => {
  const app = express();

  const apolloServerInstance = new ApolloServer({
    introspection: true,
    typeDefs: bookTypedefs,
    resolvers: bookResolver,
  });

  await apolloServerInstance.start();

  app.use(cors(), expressMiddleware(apolloServerInstance));

  app.listen(5000, () => {
    console.log("server is runing on port 5000");
  });
};
startServer();
