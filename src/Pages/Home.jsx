import React from "react";
import { MyNavbar } from "../components/navbar/MyNavbar";
import {CreateTemplate } from "../components/template/CreateTemplate"

export const Home = props => {
  return (
    <>
      <MyNavbar />
      <CreateTemplate />
    </>
  );
}
