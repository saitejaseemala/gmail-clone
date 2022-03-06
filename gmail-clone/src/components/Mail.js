import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import ErrorIcon from "@mui/icons-material/Error";
import DeleteIcon from "@mui/icons-material/Delete";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton } from "@material-ui/core";
import {
  CheckCircle,
  ExitToApp,
  LabelImportant,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import MoreVert from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import "../css/Mail.css";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../features/mailSlice";

function Mail() {
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  return (
    <div className="mail">
      <div className="mail-tools">
        <div className="mail-tools-left">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton>
            <MoveToInboxIcon />
          </IconButton>
          <IconButton>
            <ErrorIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EmailIcon />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail-tools-right">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail-body">
        <div className="mail-body-header">
          <h2>{selectedMail?.subject}</h2>
          <LabelImportant className="mail-important" />
          <p>{selectedMail?.title}</p>
          <p className="mail-time">{selectedMail?.time}</p>
        </div>
        <div className="mail-message">
          <p>{selectedMail?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Mail;
