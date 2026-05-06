import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <footer className="contact" id="contact">

      <h2>Contact</h2>
      <p>Feel free to connect with me</p>

      <div className="contact-links">

        {/* Phone */}
        <a href="tel:+971585443402">
          <i className="fa-solid fa-phone"></i>
          +971 585 443 402
        </a>

        {/* Email */}
        <a href="mailto:afnapuzhakkal@gmail.com">
          <i className="fa-solid fa-envelope"></i>
          afnapuzhakkal@gmail.com
        </a>

        {/* GitHub */}
        <a href="https://github.com/Afnapuzhakkal" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
          GitHub
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/afna-puzhakkal/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin"></i>
          LinkedIn
        </a>

      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Afna Puzhakkal
      </p>

    </footer>
  );
}

export default Contact;