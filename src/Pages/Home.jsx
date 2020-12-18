import React from "react";
import { MyNavbar } from "../components/navbar/MyNavbar";
import { CreateTemplate } from "../components/template/CreateTemplate";
import { UserTemplates } from "../components/template/UserTemplates";

export const Home = (props) => {
  return (
    <>
      <MyNavbar />
      <div className="homeTemplate">
        <CreateTemplate />
        <UserTemplates />
      </div>
    </>
  );
};
