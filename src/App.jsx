import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { client } from "./lib/apollo";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
