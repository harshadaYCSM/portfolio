import React from 'react';
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button className="btn">Send</button>
      </form>
    </div>
  );
}

export default Contact;

