import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Gmail.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";

function Gmail() {
  return (
    <Router>
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
      </div>
    </Router>
  );
}

export default Gmail;
