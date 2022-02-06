import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Application</h1>

        <Router>
          <>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </>
        </Router>
      </div>
    </div>
  );
}

export default App;
