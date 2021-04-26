import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Gmail from "./pages/Gmail";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/gmail">
            <Gmail />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
