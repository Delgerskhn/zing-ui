import React, { useState, useEffect } from "react";
import { Authentication } from "../authentication/Index";
import { Search } from "../search/Search";
import { Sidebar } from "./Sidebar";

export const MyNavbar = (props) => {
  const [showAuth, setShowAuth] = useState(true);
  const [showTabMenu, setShowTabMenu] = useState(false);

  useEffect(() => {
    checkLocation();
    star();
  }, []);

  const checkLocation = () => {
    const pathname = window.location.pathname;
    if (pathname === "/") {
      setShowAuth(true);
      setShowTabMenu(false);
    } else {
      setShowAuth(false);
      setShowTabMenu(true);
    }
  };
  const star = () => {
    let count = 50;
    let scene = document.querySelector(".scene");
    let i = 0;
    while (i < count) {
      let star = document.createElement("i");
      let x = Math.floor(Math.random() * window.innerWidth);
      let y = Math.floor((Math.random() * window.innerHeight) / 2);
      let duration = Math.random() * 10;
      let size = Math.random() * 3;
      star.style.left = x + "px";
      star.style.top = y + "px";
      star.style.width = 1 + size + "px";
      star.style.height = 1 + size + "px";
      star.style.animationDuration = 5 + duration + "s";
      star.style.animationDelay = duration + "s";
      scene.appendChild(star);
      i++;
    }
  };
  return (
    <div className="navContainer">
      <header className="navbar">
        <div className="scene">
          <img
            src={require("../../assets/img/background/worldwide.svg")}
            className="layer img1"
            alt="worldwide"
          />
          <img
            src={require("../../assets/img/background/planet.svg")}
            className="layer img2"
            alt="planet"
          />
          <img
            src={require("../../assets/img/background/project.svg")}
            className="layer img3"
            alt="project"
          />
          <img
            src={require("../../assets/img/background/saturn.svg")}
            className="layer img4 "
            alt="saturn"
          />
          <img
            src={require("../../assets/img/background/solar-system.svg")}
            className="layer img5"
            alt="solar-system"
          />
        </div>
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
