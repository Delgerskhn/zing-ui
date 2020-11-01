import React from "react";
import { MyNavbar } from "../components/navbar/MyNavbar";
import {CreateTemplate } from "../components/template/CreateTemplate";

// import {Search } from "../components/search/Search";

function RegisteredHome() {
  return (
    <div>
      <MyNavbar />
      <div className="template">
         <CreateTemplate />
      </div>
    </div>
  );
}

export default RegisteredHome;
