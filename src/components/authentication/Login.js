import React, { useState } from "react";
import Link from "@material-ui/core/Link";
import FacebookAuth from "react-facebook-auth";

// const socialBtn = {
//   width: "78%",
//   padding: "5px",
//   backgroundColor: "#f53b57",
//   marginTop: "2vh",
// };

const MyFacebookButton = ({ onClick }) => (
  <button className="btn btn-primary" className="btn form-social-btn" onClick={onClick}>
    Login with facebook
  </button>
);


export const Login = (props) => {
  const [accessToken, setAccessToken] = useState(null);
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const onChange = ({ target }) => {
    const value = target.value;
    setState((prevState) => ({
      ...prevState,
      [target.name]: value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  const authenticate = (response) => {
    console.log(response);
    // Api call to server so we can validate the token
    if(response.status !=="unknown"){
      setAccessToken(response.accessToken);
    }
  };
  return (
    <div className="modal-content">
      <header className="gridCont">
        <button className="btn btn-bottomBorder signHeader">
          <h3>Нэвтрэх</h3>
        </button>
        <button
          onClick={() => props.showRegisterModal()}
          className="btn btn-nobottomBorder signHeader"
        >
          <h3>Бүртгүүлэх</h3>
        </button>
      </header>
      <form onSubmit={onSubmit} className="form">
        <input
          name="username"
          value={state.username}
          className="inputForm"
          placeholder="Нэвтрэх нэр эсвэл и-мэйл"
          onChange={onChange}
          required
        />
        <input
          name="password"
          value={state.password}
          type="password"
          className="inputForm"
          placeholder="Нууц үг"
          onChange={onChange}
          required
        />
        <div className="gridCont">
          <button className="btn btn-primary gridItem" type="submit">
            Нэвтрэх
          </button>

          <button
            className="btn btn-secondary gridItem"
            onClick={() => props.closeModal()}
          >
            Буцах
          </button>
        </div>
      </form>
      <Link href="#" variant="body2" style={{ fontSize: "20px" }}>
        Нууц үг мартсан?
      </Link>
      <br />
      <FacebookAuth
        appId="394058105111687"
        callback={authenticate}
        component={MyFacebookButton}
        redirectUri={"localhost:3000"}
      />
      <button className="btn btn-primary" className="btn form-social-btn">
        Google эрхээр нэвтрэх
      </button>
    </div>
  );
};
