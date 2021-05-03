import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Gmail.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "../components/SendMail";
import { useStateValue } from "../StateProvider";

function Gmail() {
  const [{ sendMessageIsOpen, user }, dispatch] = useStateValue();

  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="gmail">
          <Header />
          <div className="gmail__body">
            <Sidebar />
            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/gmail">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </Router>
  );
}

export default Gmail;
