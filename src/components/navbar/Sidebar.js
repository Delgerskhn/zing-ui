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
