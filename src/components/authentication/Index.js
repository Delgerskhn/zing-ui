import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Modal from 'react-modal';
import { Login } from "./Login";
import { Register } from "./Register";

const customStyles = {
  content : {
    top  : '10%',
    width  : '30%',
    margin : 'auto',
    bottom  : 'auto',
  }
};

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
      <Button variant="contained" onClick={()=>showLoginModal()}>
        Нэвтрэх
      </Button>
      <Button variant="contained" color="primary" onClick={()=>showRegisterModal()}>
        Бүртгүүлэх
      </Button>
      <Modal
        isOpen={showRegisterPage||showLoginPage}
        onRequestClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        appElement={document.getElementById('root')}
        style={customStyles}
      >
        {showLoginPage&&<Login showRegisterModal={()=>showRegisterModal()}/>}
        {showRegisterPage&& <Register showLoginModal={()=>showLoginModal()}/>}
      </Modal>
    </div>
  );
};
