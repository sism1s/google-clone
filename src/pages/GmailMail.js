import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./GmailMail.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "../components/SendMail";
import { useStateValue } from "../StateProvider";
import Login from "./Login";

function GmailMail() {
  const [{ sendMessageIsOpen, user }, dispatch] = useStateValue();

  return (
    <div className="gmail">
      <Header />
      <div className="gmail__body">
        <Sidebar />

        <Mail />
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>
  );
}

export default GmailMail;
