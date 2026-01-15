import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/submissions.css";

const PainPointModal = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="submission-action-btn" 
      onClick={() => navigate("/pain-point-solution")}
    >
      Submit Now
    </button>
  );
};

export default PainPointModal;
