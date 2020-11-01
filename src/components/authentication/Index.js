import React, { useState } from "react";
import Modal from 'react-modal';
import { Login } from "./Login";
import { Register } from "./Register";

const customStyles = {
  content : {
    top  : '10%',
    width  : '30%',
    margin : 'auto',
    bottom  : 'auto',
  },
};
const btnLogin={
  backgroundColor:"white",
  marginRight:"10px",
}
export const Authentication = (props) => {
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showRegisterPage, setShowRegisterPage] = useState(false);

  const showLoginModal = () => {
    setShowLoginPage(true);
    setShowRegisterPage(false);
  };

  const showRegisterModal = () => {
    setShowLoginPage(false);
    setShowRegisterPage(true);
  };
  const closeModal = () => {
    setShowLoginPage(false);
    setShowRegisterPage(false);
  };
  return (
    <div>
      <button className="btn btn-default" onClick={()=>showLoginModal()} style={btnLogin}>
        Нэвтрэх
      </button>
      <button  className="btn btn-primary" onClick={()=>showRegisterModal()}>
        Бүртгүүлэх
      </button>
      <Modal
        isOpen={showRegisterPage||showLoginPage}
        onRequestClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        appElement={document.getElementById('root')}
        style={customStyles}
      >
        {showLoginPage&&<Login showRegisterModal={()=>showRegisterModal()} closeModal={()=>closeModal()}/>}
        {showRegisterPage&& <Register showLoginModal={()=>showLoginModal()} closeModal={()=>closeModal()}/>}
      </Modal>
    </div>
  );
};
