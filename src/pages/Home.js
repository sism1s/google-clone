import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar, Popover, Typography } from "@material-ui/core";
import Search from "../components/Search";
import { useStateValue } from "../StateProvider";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

function Home() {
  const [{ user }, dispatch] = useStateValue();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch({
        type: actionTypes.LOGOUT_USER,
      });
    });
  };

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
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar
            style={{ cursor: "pointer" }}
            aria-describedby={id}
            onClick={handleClick}
            src={user?.photoUrl}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {user ? (
              <Typography
                className={classes.typography}
                style={{ cursor: "pointer" }}
                onClick={signOut}
              >
                Sign Out
              </Typography>
            ) : (
              <Typography
                className={classes.typography}
                style={{ cursor: "pointer" }}
                onClick={signIn}
              >
                Sign In
              </Typography>
            )}
          </Popover>
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
