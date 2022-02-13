import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import LoginForm from "./pages/Login";
import SignUp from "./pages/Signup";
import PrivateRoute from "./PrivateRoutes";
import "./App.css";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Routes>
            <Route exact path="/" element={<LoginForm />} />
            <Route path="/signup" element={<SignUp />} />
            <Route exact path="*" element={<PrivateRoute />} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
