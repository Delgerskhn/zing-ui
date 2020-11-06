import React from "react";
import Link from "@material-ui/core/Link";

const socialBtn = {
  width: "78%",
  padding: "5px",
  backgroundColor: "#f53b57",
  marginTop: "2vh",
};
export const Login = (props) => {
  return (
    <div>
      <div className="gridCont">
        <button className="btn btn-bottomBorder signHeader">
          <h3>Нэвтрэх</h3>
        </button>
        <button
          onClick={() => props.showRegisterModal()}
          className="btn btn-nobottomBorder signHeader"
        >
          <h3>Бүртгүүлэх</h3>
        </button>
      </div>
      <form>
        <input
          name="name"
          className="inputForm"
          placeholder="Нэвтрэх нэр эсвэл и-мэйл"
        />
        <input
          name="password"
          type="password"
          className="inputForm"
          placeholder="Нууц үг"
        />
        <div className="gridCont">
          <button className="btn btn-primary modalBtn" type="submit">
            Нэвтрэх
          </button>

          <button
            className="btn btn-secondary modalBtn"
            type="submit"
            onClick={() => props.closeModal()}
          >
            Буцах
          </button>
        </div>

        <Link href="#" variant="body2" style={{ fontSize: "20px" }}>
          Нууц үг мартсан?
        </Link>
        <br />

        <button className="btn btn-primary" style={socialBtn}>
          Facebook эрхээр нэвтрэх
        </button>

        <button className="btn btn-primary" style={socialBtn}>
          Google эрхээр нэвтрэх
        </button>
      </form>
    </div>
  );
};
