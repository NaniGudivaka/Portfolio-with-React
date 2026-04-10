import React from 'react'

const Contacts = () => {
  return (
      <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Message"></textarea>

      <button>Send</button>
    </section>
  )
}

export default Contacts