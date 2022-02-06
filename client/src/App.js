import "./App.css";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";

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
