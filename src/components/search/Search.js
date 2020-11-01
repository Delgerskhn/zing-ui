import React from "react";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import './searchStyle.css'

export const Search = props => {

  return (
    <form className="root">
      <InputBase
        className="input"
        placeholder="Хайх"
      />
      <div className="btnSearch">
      <IconButton
        type="submit"
        className="iconButton"
        aria-label="search"
        style={{color:"white",fontWeight:"bold"}}
      >
        <SearchIcon />
      </IconButton>
      </div>
    </form>
  );
}
