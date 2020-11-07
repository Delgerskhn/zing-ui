import React,{useState} from "react";

export const Register = (props) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
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

  return (
    <div>
      <div className="gridCont">
        <button
          onClick={() => props.showLoginModal()}
          className="btn btn-nobottomBorder signHeader"
        >
          <h3>Нэвтрэх</h3>
        </button>

        <button className="btn btn-bottomBorder signHeader">
          <h3>Бүртгүүлэх</h3>
        </button>
      </div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          value={state.username}
          className="inputForm"
          placeholder="Нэвтрэх нэр"
          onChange={onChange}
          required
        />
        <input
          name="email"
          value={state.email}
          className="inputForm"
          type="email"
          placeholder="И-мэйл"
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          value={state.password}
          className="inputForm"
          placeholder="Нууц үг"
          onChange={onChange}
          required
        />
        <input
          name="repeatPassword"
          type="password"
          value={state.repeatPassword}
          className="inputForm"
          placeholder="Нууц үг давтах"
          onChange={onChange}
          required
        />
        <div className="gridCont">
          <button className="btn btn-primary modalBtn" type="submit">
            Бүртгүүлэх
          </button>
          <button
            className="btn btn-secondary modalBtn"
            onClick={() => props.closeModal()}
          >
            Буцах
          </button>
        </div>
      </form>
    </div>
  );
};
