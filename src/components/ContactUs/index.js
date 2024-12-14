import React from "react";
import "./index.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">
        We’d love to hear from you! 
        Feel free to reach out via the form below or directly through email or phone.
      </p>
      <form className="contact-form">
        <input
          type="text"
          placeholder="Your Name"
          className="contact-input"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="contact-input"
          required
        />
        <textarea
          placeholder="Your Message"
          className="contact-textarea"
          rows="5"
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
      <div className="contact-info">
        <a href="mailto:example@example.com" className="contact-link">
          example@example.com
        </a>
        <a href="tel:+1234567890" className="contact-link">
          +1 234 567 890
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
