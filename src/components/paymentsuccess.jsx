import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/paystack.css";

const PaymentSuccess = () => {
  const [message, setMessage] = useState("Processing your download...");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const book = params.get("book");
    const token = params.get("token");

    if (!book || !token) {
      setMessage("Invalid download link.");
      setLoading(false);
      return;
    }

    const downloadBook = async () => {
      try {
        // Small delay for UX
        await new Promise((resolve) => setTimeout(resolve, 4000));

        // ✅ UPDATED: use live backend URL
        const response = await axios.get(
          `https://azimibooksite-production.up.railway.app/api/paystack/secure-download?token=${token}`,
          { responseType: "blob" }
        );

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${book}.pdf`);
        document.body.appendChild(link);
        link.click();

        setMessage("Download completed! Redirecting...");
        setTimeout(() => {
          window.location.href = "/"; // back to landing page
        }, 3000);
      } catch (err) {
        console.error(err);
        setMessage("Failed to download. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    downloadBook();
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{loading ? "Processing your download..." : message}</h2>
      </div>
    </div>
  );
};

export default PaymentSuccess;
