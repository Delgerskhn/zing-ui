import React, { useContext } from "react";
import { useState } from "react";
import GlobalContext from "../../Contexts/GlobalContext";

export const Search = (props) => {
  const [value, setValue] = useState("")
  const [from, setFrom] = useState("")
  const {articles, setArticles} = useContext(GlobalContext)
  const handleValue = async(e) =>{
    await setValue(e.target.value);
  }
  const search=() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"query":value});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://zingsdd.herokuapp.com/news/search", requestOptions)
      .then(response => response.json())
      .then(result => {
        setArticles(result.articles)
      })
      .catch(error => console.log('error', error));
  }
  return (
    <div className="searchContainer">
      <input className="searchInput" value={value} onChange={handleValue} placeholder="" />
        <button className="iconButton" onClick={search}>
        <i className='fas fa-search'></i>
        </button>
    </div>
  );
};
