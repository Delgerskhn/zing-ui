import React from "react";

export const Search = (props) => {
  return (
    <form className="searchContainer">
      <input className="searchInput" placeholder="" />
        <button className="iconButton">
        <i className='fas fa-search'></i>
        </button>
    </form>
  );
};
