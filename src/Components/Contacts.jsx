import React from "react";
import "../styles/contact.css"

const Contacts = () => {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>

      <p className="contact-text">
        Have a project, opportunity, or just want to connect? Feel free to
        reach out.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea
          rows="5"
          placeholder="Write your message..."
        ></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contacts;