import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Avatar,
  Switch,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@mui/icons-material/Person";
import Sidebar from "./Sidebar";
import Settings from "./Settings";

const label = { inputProps: { "aria-label": "Switch demo" } };

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
    width: "100vw",
    backgroundColor: "#1e1e1e",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleSidebar}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Toolbar>
          <Switch {...label} defaultChecked />
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDropdown}
          >
            <Avatar alt="User" src="">
              <PersonIcon />
            </Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar open={sidebar} onClose={toggleSidebar} />
      <Settings open={!dropdown} onClose={toggleDropdown} />
    </>
  );
};

export default Navbar;
