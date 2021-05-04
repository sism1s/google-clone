import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Gmail.css";
import EmailList from "./EmailList";
import SendMail from "../components/SendMail";
import { useStateValue } from "../StateProvider";

function Gmail() {
  const [{ sendMessageIsOpen, user }, dispatch] = useStateValue();

  return (
    // <Router>
    //   {!user ? (
    //     <Login />
    //   ) : (
    //     <Switch>
    //       <div className="gmail">
    //         <Header />
    //         <div className="gmail__body">
    //           <Sidebar />
    //           {/* <Switch> */}
    //           <Route path="/gmail">
    //             <EmailList />
    //           </Route>
    //           <Route path="/mail">
    //             <Mail />
    //           </Route>
    //           {/* </Switch> */}
    //         </div>
    //         {sendMessageIsOpen && <SendMail />}
    //       </div>
    //     </Switch>
    //   )}
    // </Router>

    <div className="gmail">
      <Header />
      <div className="gmail__body">
        <Sidebar />

        <EmailList />
      </div>
      {sendMessageIsOpen && <SendMail />}
    </div>
  );
}

export default Gmail;
