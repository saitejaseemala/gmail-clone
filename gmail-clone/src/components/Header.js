import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import "../css/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Avatar } from "@mui/material";
import { auth } from "./firebase";
import { logout } from "../features/userSlice";

function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header-left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png"
          alt="gmail-icon"
        />
      </div>
      <div className="header-middle">
        <SearchIcon />
        <input type="text" placeholder="Search mail" />
        <ArrowDropDownIcon className="header-input-caret" />
      </div>
      <div className="header-right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar src={user?.photoUrl} onClick={signOut} />
      </div>
    </div>
  );
}

export default Header;
