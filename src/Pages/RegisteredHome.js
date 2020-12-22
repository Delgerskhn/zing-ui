import React, { useContext } from "react";
import AlignItemsList from "../components/List";
import { MyNavbar } from "../components/navbar/MyNavbar";
import {CreateTemplate } from "../components/template/CreateTemplate";
import GlobalContext from "../Contexts/GlobalContext";

// import {Search } from "../components/search/Search";

function RegisteredHome() {
  const {articles} = useContext(GlobalContext)
  return (
    <div>
      <MyNavbar />
      <div className="template">
         <CreateTemplate />
      </div>
      <div className="home-list-container">
      <div className="home-list">
      <AlignItemsList items={articles}/>

      </div>
      </div>
    </div>
  );
}

export default RegisteredHome;
