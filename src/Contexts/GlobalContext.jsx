import React, { useState, Redirect, useEffect } from "react";
import ArticleData from "../components/search/SearchResultData.json";
const GlobalContext = React.createContext();

export const Global = (props) => {
  const [userInfo, setUserInfo] = useState(null);
  const [articles, setArticles] = useState([]);
  const setUser = (user) => {
    setUserInfo(user);
    localStorage.removeItem("user");
    if (user != null) localStorage.setItem("user", JSON.stringify(user));
  };
  useEffect(() => {
    let user = localStorage.getItem("user");
    setUserInfo(user ? JSON.parse(user) : null);
    return () => {};
  }, []);
  return (
    <GlobalContext.Provider
      value={{
        userInfo,
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
