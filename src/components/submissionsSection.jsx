import React from "react";
import "../styles/submissionsSection.css";
import StreamOfConsciousnessModal from "./streamOfConsciousnessModal";
import PainPointModal from "./painPointModal";

const SubmissionsSection = () => {
  return (
    <div className="submissions-section">
      <div className="submissions-container">
        <h1 className="submissions-title" data-aos="fade-up">Join Our Exclusive Programs</h1>
        <p className="submissions-subtitle">
          Choose the program that fits your goals and unlock amazing opportunities!
        </p>

        <div className="submissions-grid">
          {/* Stream of Consciousness Program */}
          <div className="submission-card" data-aos="fade-up" data-aos-delay="100">
            <div className="card-icon">📝</div>
            <h2>Stream of Consciousness Submission</h2>
            <p className="card-subtitle">For Book Lovers & Writers</p>
            <p className="card-description">
              Submit your creative stream of consciousness for <strong>₦5,000</strong> 
              and collaborate on an Amazon or New York Best Seller in 6 months!
            </p>
            <ul className="benefits-list">
              <li>✅ Professional collaboration opportunity</li>
              <li>✅ Potential Best Seller co-authorship</li>
              <li>✅ Expert feedback on your writing</li>
              <li>✅ 6-month Best Seller promise</li>
            </ul>
            <StreamOfConsciousnessModal />
          </div>

          {/* Pain Point Solutions Program */}
          <div className="submission-card" data-aos="fade-up" data-aos-delay="200">
            <div className="card-icon">💡</div>
            <h2>Pain Point Solution</h2>
            <p className="card-subtitle">For Everyone Seeking Digital Solutions</p>
            <p className="card-description">
              Share your pain point for <strong>₦5,000</strong> and get a 
              tailored digital solution with <strong>100% money-back guarantee</strong>!
            </p>
            <ul className="benefits-list">
              <li>✅ Customized digital solutions</li>
              <li>✅ For graduates, volunteers & businesses</li>
              <li>✅ Professional consultation included</li>
              <li>✅ 100% money-back guarantee</li>
            </ul>
            <PainPointModal />
          </div>
        </div>

        <div className="documentation-notice">
          <h3>📄 Documentation is Our Priority</h3>
          <p>
            We document everything to ensure transparency and accountability. 
            Your investment is protected with our commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmissionsSection;
