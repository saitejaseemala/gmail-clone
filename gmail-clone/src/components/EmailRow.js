import { Checkbox, IconButton } from "@material-ui/core";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import React from "react";
import "../css/EmailRow.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );
    navigate("/mail");
  };

  return (
    <div onClick={openMail} className="emailrow">
      <div className="emailrow-options">
        <Checkbox />
        <IconButton>
          <StarOutlineIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>
      <div className="emailrow-title">
        <h3 className="emailrow-title">{title}</h3>
      </div>
      <div className="emailrow-message">
        <h4>
          {subject}{" "}
          <span className="emailrow-description">- {description}</span>
        </h4>
      </div>
      <p className="emailrow-time">{time}</p>
    </div>
  );
}

export default EmailRow;
