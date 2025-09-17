import React from "react";
import "../styles/SuccessModal.css";

const SuccessModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={(e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  }}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className='checkmark-circle'>
          <div className="checkmark"></div>
        </div>
        <h3 className="modal-title">{title}</h3>
        <div className="modal-content">{children}</div>
        <button className="modal-close-btn" onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;


