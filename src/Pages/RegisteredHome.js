import React from "react";
import { MyNavbar } from "../components/navbar/MyNavbar";

// import {Search } from "../components/search/Search";

function RegisteredHome() {
  return (
    <div>
      <MyNavbar />
      <button className="btn">login</button><br/>
        <button className="btn btn-primary">login</button><br/>
        <button className="btn btn-default">login</button><br/>
        <button className="btn btn-bottomBorder">login</button><br/>
    </div>
  );
}

export default RegisteredHome;
