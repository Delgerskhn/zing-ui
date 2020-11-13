import React, { useState } from "react";

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <button className="btn" onClick={showSidebar}>
        sidebar
      </button>
      <nav className={sidebar ? "sidebar active" : "sidebar"}>
        <header className="sidebarHeader">
          <img src="" alt="user profile" className="ProfileImg" />
          <h4 style={{ fontWeight: "400" }}>User name</h4>
          <a href="/" style={{ color: "#9DABE4", margin: "0px" }}>Edit profile</a>
        </header>
        <main style={{ padding: "0em 3em" }}>
          <a href="/" className="link">
            <h4>Add border</h4>
          </a>
          <button className="dropdown-btn">
            <h2>
              Borders <i className="fa fa-chevron-up" />
            </h2>
          </button>
          <ul>
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
