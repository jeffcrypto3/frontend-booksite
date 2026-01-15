import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/submissionSuccess.css";

const SubmissionSuccess = () => {
  const [message, setMessage] = useState("Processing your submission...");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const submitData = async () => {
      const params = new URLSearchParams(window.location.search);
      const type = params.get("type");
      const reference = params.get("reference");

      if (!type || !reference) {
        setMessage("Invalid submission link.");
        setError(true);
        setLoading(false);
        return;
      }

      try {
        let endpoint = "";
        let formData = null;

        if (type === "StreamOfConsciousness") {
          endpoint = "https://azimibooksite-production.up.railway.app/api/submissions/stream-of-consciousness";
          formData = JSON.parse(sessionStorage.getItem("streamOfConsciousnessData") || "{}");
        } else if (type === "PainPointSolution") {
          endpoint = "https://azimibooksite-production.up.railway.app/api/submissions/pain-point";
          formData = JSON.parse(sessionStorage.getItem("painPointData") || "{}");
        }

        if (!formData || Object.keys(formData).length === 0) {
          setMessage("Submission data not found. Please try again.");
          setError(true);
          setLoading(false);
          return;
        }

        // Add payment reference to submission
        formData.paymentReference = reference;

        // Send submission to backend
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
          setMessage("✅ Submission successful! We've received your submission and will respond within 24-48 hours.");
          
          // Clear session storage
          if (type === "StreamOfConsciousness") {
            sessionStorage.removeItem("streamOfConsciousnessData");
          } else {
            sessionStorage.removeItem("painPointData");
          }

          // Redirect to homepage after 5 seconds
          setTimeout(() => {
            navigate("/");
          }, 5000);
        } else {
          setMessage("❌ Failed to submit. Please contact us at azimikoko5@gmail.com");
          setError(true);
        }
      } catch (err) {
        console.error("Submission error:", err);
        setMessage("❌ Something went wrong. Please contact us at azimikoko5@gmail.com");
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    submitData();
  }, [navigate]);

  return (
    <div className="submission-success-container">
      <div className="submission-success-box">
        {loading ? (
          <>
            <div className="spinner"></div>
            <h2>{message}</h2>
          </>
        ) : (
          <>
            <div className={error ? "icon-error" : "icon-success"}>
              {error ? "❌" : "✅"}
            </div>
            <h2>{message}</h2>
            {!error && (
              <p className="redirect-notice">
                Redirecting to homepage in 5 seconds...
              </p>
            )}
            <button onClick={() => navigate("/")} className="home-button">
              Go to Homepage
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SubmissionSuccess;
