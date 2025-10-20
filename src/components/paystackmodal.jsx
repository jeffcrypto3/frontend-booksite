import React, { useState } from "react";
import "../styles/paystack.css";

const PaystackModal = ({ bookName, amount }) => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    // ✅ Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
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
          body: JSON.stringify({ email, amount, bookName }),
        }
      );

      const data = await response.json();

      if (data.status && data.data.authorization_url) {
        // Stay in the same tab and redirect to Paystack checkout
        window.location.href = data.data.authorization_url;
      } else {
        console.error(data);
        alert("Error initializing payment. Check console.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong while initializing payment.");
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <>
      <button className="paystack-button" onClick={() => setShowModal(true)}>
        Buy Now
      </button>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Enter your email to continue</h2>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={handlePayment} disabled={loading}>
                {loading ? "Processing..." : `Proceed to Pay ₦${amount}`}
              </button>
              <button className="cancel" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaystackModal;
