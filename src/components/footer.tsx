import React from "react";
import "./styles.css"; // Import the CSS file


const Footer = () => {
  return (

      <footer className="footer">
        <div className="footer-section">
        <i className="fas fa-home"></i> <span>Home</span>
        </div>
        <div className="footer-section">
        <i className="fas fa-tools"></i> <span>Services</span>
        </div>
        <div className="footer-section">
        <i className="fas fa-circle-info"></i> <span>About</span>
        </div>
        <div className="footer-section"><i className="fas fa-phone"></i> <span>Contact</span>
        </div>
      </footer>
    
  );
};

export default Footer;