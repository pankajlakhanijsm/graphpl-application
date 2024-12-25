import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query getBooks {
    author
  }
`;

function App() {
  const { loading, data, error } = useQuery(GET_USERS);
  console.log(data);
  debugger;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);
  return <div className="App">pankaj</div>;
}

export default App;
