import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/submissions.css";

const StreamOfConsciousnessModal = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="submission-action-btn" 
      onClick={() => navigate("/stream-of-consciousness")}
    >
      Submit Now
    </button>
  );
};

export default StreamOfConsciousnessModal;
