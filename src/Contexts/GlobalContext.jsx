import React, { useState, Redirect, useEffect } from "react";
import ArticleData from "../components/search/SearchResultData.json";
const GlobalContext = React.createContext();

export const Global = (props) => {
  const [user, setUser] = useState(null);
  const [articles, setArticles] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        user,
        setUser,
        articles,
        setArticles,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
