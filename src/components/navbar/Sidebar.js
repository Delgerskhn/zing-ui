import React, { useState, useEffect, useRef } from "react";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [border, setShowBorder] = useState(false);

  const showSidebar = () => setSidebar(true);
  const showBorder = () => setShowBorder(!border);

  let domNode = useClickOutside(() => {
    setSidebar(false);
  });

  return (
    <div ref={domNode}>
      <button className="menu-btn" onClick={showSidebar}>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>

      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <header className="sidebarHeader">
          <img src="" alt="user profile" className="ProfileImg" />
          <h4 style={{ fontWeight: "400" }}>User name</h4>
          <a href="/" style={{ color: "#9DABE4", margin: "0px" }}>
            Edit profile
          </a>
        </header>
        <main style={{ padding: "0em 3em" }}>
          <button className="dropdown-btn">
             Add border
          </button>
          <button className="dropdown-btn" onClick={showBorder}>
            Borders
          </button>
          <ul style={border ? { display: "block" } : { display: "none" }}>
            <li> border 1</li>
            <li>border 2</li>
            <li>border 3</li>
            <li>border 4</li>
          </ul>
        </main>
        <footer className="footer">
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
