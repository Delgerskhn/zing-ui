import React from "react";
import { Search } from "../components/search/Search";

export const SearchResult = () => {
  return (
    <div>
      {/* <header className="searchNavbar">
        <h1>Logo</h1>
        <div className="navSideBar">
        < Sidebar/>
        </div>
      </header> */}
      <main>
        <div className="searchPart">
          <Search />
        </div>
      </main>
      <footer className="pageFooter"></footer>
    </div>
  );
};
