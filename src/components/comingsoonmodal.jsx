import React, { useState } from "react";
import "../styles/paystack.css";

const ComingSoonModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="paystack-button" onClick={() => setShowModal(true)}>
        Buy Now
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Coming Soon!</h2>
            <p>This book is not available yet. Stay tuned!</p>
            <button className="cancel" onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ComingSoonModal;
