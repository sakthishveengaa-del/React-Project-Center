import React from "react";
import "./Footer.css"; // Import CSS for styling

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About Section */}
        <div className="footer-box">
          <h3>Project Training Center</h3>
          <p>
            This project center teaches all types of project making, 
            mini projects, main projects, and project training.
          </p>
          <p>
            We also provide all types of courses and job placement support 
            for students and freshers.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="footer-box">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank">Instagram</a>
            <a href="https://facebook.com" target="_blank">Facebook</a>
            <a href="https://linkedin.com" target="_blank">LinkedIn</a>
            <a href="https://twitter.com" target="_blank">Twitter</a>
            <a href="https://yourwebsite.com" target="_blank">Website</a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© 2026 Project Training Center | All Rights Reserved</p>
        <p>Developed by Sathish</p>
      </div>

    </footer>
  );
}
