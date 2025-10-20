import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          {/* Brand Info */}
          <div className="footer-brand">
            <h2>Azimi Koko</h2>
            <p>Where stories inspire, educate, and connect the world.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#books">Books</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="footer-socials">
            <h3>Follow Our Journey</h3>
            <div className="social-icons">
              <a href="https://www.youtube.com/@Azimikoko-u-6p-o3e" target="_blank" rel="noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.facebook.com/AzimiKoko" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/KokoAzimi22117" target="_blank" rel="noreferrer">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Azimi Koko. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
