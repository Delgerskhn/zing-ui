import React from "react";
import { MyNavbar } from "../components/navbar/MyNavbar";
import { Search } from "../components/search/Search";

export const SearchResult = () => {
  return (
    <div>
         <MyNavbar />
      <main>
        {/* <div className="searchPart">
          <Search />
        </div> */}
      </main>
      <footer className="pageFooter"></footer>
    </div>
  );
};
