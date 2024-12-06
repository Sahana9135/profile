import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Sahana Saravanan | Junior Web Developer</p>
      <ul className="social-links">
        <li>
          <a href="https://github.com/Sahana9135?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sahanasaravanan9135/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:sahanasaravanan2004@gmail.com">Email</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
