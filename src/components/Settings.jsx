import React from "react";
import {
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Settings = ({ open, onClose }) => {
  const history = useHistory();

  const handleProfileClick = () => {
    history.push("/profile");
    onClose();
  };

  return (
    <Menu
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      open={open}
      onClose={onClose}
    >
      <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
      <MenuItem onClick={onClose}>Log Out</MenuItem>
      <MenuItem onClick={onClose}>Setting</MenuItem>
    </Menu>
  );
};

export default Settings;
