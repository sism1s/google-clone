import React from "react";
import useGoogleSearch from "../hooks/useGoogleSearch";
import { useStateValue } from "../StateProvider";
import "./SearchPage.css";
import Response from "../response";
import { Link } from "react-router-dom";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  //LIVE API CALL
  //   const { data } = useGoogleSearch(term);

  const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link>
          <img
            className="searchPage__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
            alt=""
          />
        </Link>

        <div className="searchPage__headerBody"></div>
      </div>

      <div className="searchPage__results"></div>
    </div>
  );
}

export default SearchPage;
