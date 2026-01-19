import React from "react";
import "../styles/referralProgram.css";
import referralFlyer from "../assets/yes-we-can-flyer.png";

const ReferralProgram = () => {
  return (
    <div className="referral-program-section">
      <div className="referral-container">
        <h1 className="referral-title" data-aos="fade-up">Special Opportunity for Book Lovers!</h1>
        
        <div className="referral-content">
          <div className="referral-main-message">
            <h2>📚 Buy Both Books. Read Them. Send Us Your Thoughts!</h2>
            <p className="referral-description">
              Purchase both "Dreams Beyond Borders" and "Gods to Goddesses", read them carefully, 
              and send us an email to <a href="mailto:azimikoko5@gmail.com">azimikoko5@gmail.com</a>
            </p>
            <div className="referral-benefits">
              <div className="benefit-card" data-aos="fade-up" data-aos-delay="100">
                <h3>🎯 Become a Fan Constituent</h3>
                <p>Get 50% referral eligibility when you join our fan constituency</p>
              </div>
              <div className="benefit-card" data-aos="fade-up" data-aos-delay="200">
                <h3>✨ Exclusive Collaboration</h3>
                <p>If you're interested, we can bring you a book of the same caliber that you just read</p>
              </div>
              <div className="benefit-card" data-aos="fade-up" data-aos-delay="300">
                <h3>🏆 Best Seller Promise</h3>
                <p>We're promising an Amazon or New York Best Seller in six months!</p>
              </div>
            </div>
          </div>

          <div className="referral-flyer-container">
            <img 
              src={referralFlyer} 
              alt="Yes We Can Book Club - Referral Program" 
              className="referral-flyer"
            />
          </div>
        </div>

        <div className="email-cta">
          <p>
            📧 Email us at <strong><a href="mailto:azimikoko5@gmail.com">azimikoko5@gmail.com</a></strong> after reading both books to unlock your benefits!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;
