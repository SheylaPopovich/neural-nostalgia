import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  // ApolloClient,
  // InMemoryCache,
  ApolloProvider,
  // createHttpLink,
} from "@apollo/client";
import LoginForm from "../src/pages/LoginForm";


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider>
      <Router>
        <>
          <Routes>
            <Route exact path="/login" component={LoginForm} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
