import { Checkbox, IconButton } from "@material-ui/core";
import React from "react";
import "./EmailRow.css";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StartBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { useHistory } from "react-router";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const [{ selectedMail }, dispatch] = useStateValue();

  const openMail = () => {
    dispatch({
      type: actionTypes.SET_SELECTED_MAIL,
      selectedMail: {
        id,
        title,
        subject,
        description,
        time,
      },
    });
    history.push("/gmailmail");
  };

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StartBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description"> - {description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export default EmailRow;
