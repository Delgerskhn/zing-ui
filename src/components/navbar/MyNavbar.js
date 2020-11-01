import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import { Authentication } from "../authentication/Index";
import { Search } from "../search/Search";
// import "./style.css";
// import {Login} from "../authentication/Login"

// const useStyles = makeStyles((theme) => ({
//   navRoot: {
//     flexGrow: 1,
//   },
//   navApp:{
//     backgroundColor:"#ffffff",
//     boxShadow:"none",
//   },
// }));

export const MyNavbar = (props) => {
  // const classes = useStyles();

  return (
    <div className="navContainer">
      <header className="navbar">
        <div className="auth">
          <Authentication />
        </div>
        <div className="navh1"><h1>Мэдээ хайх</h1></div>
        <div className="navSearch">
          <Search />
        </div>
      </header>
    </div>
  );
};
