import React from "react";
import { templateData } from "./exampleJsonData";

export const UserTemplates = () => {
  return (
    <div className="borderContainer">
      {templateData.map((data, key) => {
        return (
          <div className="userBorderBox" key={key}>
            <div className="userCont">
              <button className="editIcon">
                <i className="fas fa-pen"></i>
              </button>
              <button className="deleteIcon">
                <i className="fa fa-close"></i>
              </button>
            </div>
            <div className="borderName">{data.name}</div>
          </div>
        );
      })}
    </div>
  );
};
