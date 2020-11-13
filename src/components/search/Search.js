import React from "react";
import "./searchStyle.css";

export const Search = (props) => {
  return (
    <form className="root">
      <input className="input" placeholder="" />
        <button className="iconButton">
        <i className='fas fa-search'></i>
        </button>
    </form>
  );
};
