import React, { useState } from "react";
import Modal from "react-modal";
import { TemplateForm } from "./TemplateForm";
export const CreateTemplate = () => {
  const [showBorder, setShowBorder] = useState(false);
  const handleShowBorder = () => {
    setShowBorder(true);
  };
  const handleCloseModal = () => {
    setShowBorder(false);
  };

  return (
    <div>
      <button className="borderBox" onClick={handleShowBorder}>
        <div className="plusIcon"></div>
      </button>
      <Modal
        className="modal"
        isOpen={showBorder}
        onRequestClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        appElement={document.getElementById("root")}
      >
        <TemplateForm handleCloseModal={() => handleCloseModal()} />
      </Modal>
    </div>
  );
};
