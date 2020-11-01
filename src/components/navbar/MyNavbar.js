import React, { useState } from "react";
import { Authentication } from "../authentication/Index";
import { Search } from "../search/Search";
import { Sidebar } from "./Sidebar";

export const MyNavbar = (props) => {
  const [showAuth, setShowAuth] = useState(true);
  const [showTabMenu, setShowTabMenu] = useState(false);

  return (
    <div className="navContainer">
      <header className="navbar">
        {/* <div className="stars"></div> */}
        {showAuth && (
          <div className="auth">
            <Authentication />
          </div>
        )}
        {showTabMenu && <Sidebar />}
        <div className="navh1">
          <h1>Мэдээ хайх</h1>
        </div>
        <div className="navSearch">
          <Search />
        </div>
      </header>
    </div>
  );
};
