import React from "react";

function Modal({ onClose }) {
  return (
    <div className="modal">
      <h2>Enable Location</h2>
      <p>Please enable location to proceed.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Modal;
