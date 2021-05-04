import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { Button } from "@material-ui/core";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

function Login() {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch({
          type: actionTypes.LOGIN_USER,

          user: {
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          },
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <Link className="login__google" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            alt=""
          />
        </Link>
        <img
          className="login__gmail"
          src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
