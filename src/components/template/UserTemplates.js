import React from "react";
import { templateData } from "./exampleJsonData";

export const UserTemplates = () => {
  return (
    <div className="userBorder">
      {templateData.map((data, key) => {
        return (
          <div className="userBorderBox" key={key}>
            <div className="userCont">
              <button style={{background: "red"}}>
                <i className="fa fa-close"></i>
              </button>
              <button style={{background: "yellow"}}>
                <i className="fas fa-pen"></i>
              </button>
            </div>
            <div className="borderName">{data.name}</div>
          </div>
        );
      })}
    </div>
  );
};
