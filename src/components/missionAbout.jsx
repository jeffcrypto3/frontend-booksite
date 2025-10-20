import React from "react";
import "../styles/missionAbout.css";
import { PenLine, Users, Rocket, Handshake, Mail, Phone } from "lucide-react";

const missionAbout = () => {
  return (
    <>
      <section className="mission-about-container">
        {/* Mission Statement */}
        <div className="mission-section">
          <h1>The Intellectual & Moral Starting Point</h1>
          <p>
            Join the movement to make Nigeria — and by extension, Africa — work.
            Our mission starts with words, grows through action, and lives
            through you.
          </p>
        </div>

        {/* Koko House */}
        <div className="koko-section">
          <h1>“We are, first and foremost, a publishing company.”</h1>
          <p>
            We publish, promote, and mentor aspiring writers — guiding you from
            dream to the reality of your own book.
          </p>
          <button className="cta-btn">
            <PenLine size={18} /> Get Published with Koko House
          </button>
        </div>

        {/* Yes We Can Club */}
        <div className="yes-section">
          <h1>A Community of Dreamers, Doers, and Builders</h1>
          <p>
            The Yes We Can Club mobilizes everyday Nigerians who believe that
            change starts with action. Join our book clubs, discussions, and
            empowerment programs. We connect readers, writers, and active
            citizens — serving as a rallying point for global Africans united
            for progress.
          </p>
          <button className="cta-btn">
            <Users size={18} /> Join the Movement
          </button>
        </div>

        {/* ExSocial Section */}
        <div className="exsocial-section">
          <h1>Africa’s First Native Social Software Development Environment</h1>
          <p>
            ExSocial is a new kind of social technology — designed for truth,
            equity, and creative independence. We give our community its own
            megaphone to compete globally.
          </p>
          <ul>
            <li>Ethical and women-centered technology</li>
            <li>Open digital collaboration tools</li>
            <li>Progressive African innovation</li>
          </ul>
          <button className="cta-btn">
            <Rocket size={18} /> Discover ExSocial
          </button>
        </div>

        {/* Partner Section */}
        <div className="partner-section">
          <h1>“Read. Earn. Empower Others.”</h1>
          <p>
            Read our two books. Contact us to qualify for a 50% referral
            incentive. Share the message — and earn while empowering others.
            We’re turning readers into partners and ambassadors of the vision.
          </p>
          <button className="cta-btn">
            <Handshake size={18} /> Become a Partner
          </button>
        </div>

        {/* About Azimi Koko */}
        <div className="about-section">
          <h1>Meet the Visionary</h1>
          <p>
            Azimi Koko is a reformist author and nation-builder dedicated to
            seeing Nigeria work within his lifetime. After 42 years in the
            United States, he returned home to help rebuild Africa’s story — one
            rooted in creativity, unity, and self-determination.
          </p>

          <div className="about-buttons">
            <button className="cta-btn">
              <Mail size={18} /> Join Our Newsletter
            </button>
            <button className="cta-btn">
              <Phone size={18} /> Contact Us
            </button>
          </div>

          <div className="contact-info">
            <p>📞 +234 703 362 7981</p>
            <p>📧 azimikoko5@gmail.com</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default missionAbout;
