import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/submissionPage.css";

const StreamOfConsciousnessPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      alert("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://azimibooksite-production.up.railway.app/api/paystack/initialize",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            amount: 5000,
            bookName: "StreamOfConsciousness",
          }),
        }
      );

      const data = await response.json();

      if (data.status && data.data.authorization_url) {
        sessionStorage.setItem("streamOfConsciousnessData", JSON.stringify(formData));
        window.location.href = data.data.authorization_url;
      } else {
        console.error(data);
        alert("Error initializing payment. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="submission-page">
      <div className="submission-page-container">
          <button className="back-button" onClick={() => navigate("/")}>
            ← Back to Home
          </button>

          <div className="submission-content">
            <div className="submission-header">
              <div className="header-icon">📝</div>
              <h1>Stream of Consciousness Submission</h1>
              <p className="header-subtitle">For Book Lovers & Writers</p>
            </div>

            <div className="submission-info">
              <h2>Program Details</h2>
              <p>
                Submit your creative stream of consciousness for <strong>₦5,000</strong> and 
                collaborate on an Amazon or New York Best Seller in 6 months!
              </p>
              
              <div className="benefits-section">
                <h3>What You Get:</h3>
                <ul>
                  <li>✅ Professional collaboration opportunity</li>
                  <li>✅ Potential Best Seller co-authorship</li>
                  <li>✅ Expert feedback on your writing</li>
                  <li>✅ 6-month Best Seller promise</li>
                </ul>
              </div>
            </div>

            <div className="submission-form">
              <h2>Submit Your Application</h2>
              <p className="form-description">
                Fill in your details below to proceed with payment and submission.
              </p>

              <div className="form-field">
                <label>Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-field">
                <label>Email Address *</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <button 
                className="submit-payment-btn" 
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Processing..." : "Proceed to Pay ₦5,000"}
              </button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default StreamOfConsciousnessPage;
