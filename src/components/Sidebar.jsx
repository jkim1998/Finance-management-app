import React from "react";
import { Drawer, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    background: "yellow",
  },
}));

const Sidebar = ({ open, onClose }) => {
  const classes = useStyles();

  return (
    <Drawer open={open} onClose={onClose}>
      <List className={classes.list}>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="About" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
