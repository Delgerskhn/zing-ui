import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    position:"absolute",
    top:"30px",
    right:"30px",
    marginRight: theme.spacing(2),
    color:"#fff",
  },
  icon:{
      width:"58px",
      height:"40px",
  }
}));

export const Sidebar = () => {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={showSidebar}
        edge="start"
        className={classes.menuButton}
      >
        <MenuIcon className={classes.icon}/>
      </IconButton>
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <header>
          <img src="" alt="user profile" />
          <h3>User name</h3>
          <p>Edit profile</p>
        </header>
        <main>
          <ul>
            <li>
              <a href="/">Add border</a>
            </li>
            <li>
              <div>
                <i className="fa fa-chevron-up" />
                borders
                <ul>
                  <li>border 1</li>
                  <li>border 2</li>
                  <li>border 3</li>
                  <li>border 4</li>
                </ul>
              </div>
            </li>
          </ul>
        </main>
        <footer>
          <button>Log out</button>
          <p>
            ZING v1.0.1
            <br />
            2020
          </p>
        </footer>
      </nav>
    </div>
  );
};
