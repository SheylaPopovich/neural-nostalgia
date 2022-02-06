import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import LoginForm from "../src/pages/LoginForm";

function App() {
  return (
    <ApolloProvider>
      <Router>
        <>
          <Switch>
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
