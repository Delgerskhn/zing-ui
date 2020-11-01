import React from "react";
import "./searchStyle.css";

export const Search = (props) => {
  return (
    <form className="root">
      <input className="input" placeholder="" />
      <div className="btnSearch" type="button">
        <button className="iconButton">
        <i className='fas fa-search'></i>
        </button>
      </div>
    </form>
  );
};
