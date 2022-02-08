import React from "react";
import "./HeaderOptions.css";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function HeaderOptions({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div onClick={onClick} className="header_options">
      {Icon && <Icon className="headerOption_Icon" />}
      {avatar && (
        <Avatar className="headerOption_avatar">{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
