import React from "react";
import { Search } from "../components/search/Search";

export const SearchResult = () => {
  return (
    <div>
      <main>
        <div className="searchPart">
          <Search />
        </div>
      </main>
      <footer className="pageFooter"></footer>
    </div>
  );
};
