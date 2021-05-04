import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import Gmail from "./pages/Gmail";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import { auth } from "./firebase";
import { useEffect } from "react";
import Login from "./pages/Login";
import GmailMail from "./pages/GmailMail";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: actionTypes.LOGIN_USER,

          user: {
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          },
        });
      } else {
      }
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/gmail">
            {!user ? <Login /> : <Gmail />}
          </Route>

          <Route exact path="/gmailmail">
            {!user ? <Login /> : <GmailMail />}
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
