import React, { useContext } from "react";
import GlobalContext from "../Contexts/GlobalContext";

export default function UserInfo({ user }) {
  const { setUser } = useContext(GlobalContext);
  return (
    <div style={{ display: "flex" }}>
      <div className="picture">
        <img src={user.picture.data.url} />
      </div>
      <div className="name">{user.name}</div>
      <button className="logout" onClick={() => setUser(null)}>
        Гарах
      </button>
    </div>
  );
}
