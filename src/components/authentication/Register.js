import React from "react";

export const Register = (props) => {
  return (
    <div>
      <div className="gridCont">
        <button
          onClick={() => props.showLoginModal()}
          type="submit"
          className="btn btn-nobottomBorder signHeader"
        >
          <h3>Нэвтрэх</h3>
        </button>

        <button className="btn btn-bottomBorder signHeader">
          <h3>Бүртгүүлэх</h3>
        </button>
      </div>
      <form>
        <input name="name" className="inputForm" placeholder="Нэвтрэх нэр" />
        <input
          name="email"
          className="inputForm"
          type="email"
          placeholder="И-мэйл"
        />
        <input
          name="password"
          type="password"
          className="inputForm"
          placeholder="Нууц үг"
        />
        <input
          name="repeatPass"
          type="password"
          className="inputForm"
          placeholder="Нууц үг давтах"
        />
        <div className="gridCont">
          <button className="btn btn-primary modalBtn" type="submit">
            Бүртгүүлэх
          </button>
          <button
            className="btn btn-secondary modalBtn"
            type="submit"
            onClick={() => props.closeModal()}
          >
            Буцах
          </button>
        </div>
      </form>
    </div>
  );
};
