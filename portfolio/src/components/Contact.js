import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    const emailSubject = encodeURIComponent('Contact Form Submission');
    const emailBody = encodeURIComponent(`Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`);
    const mailtoLink = `mailto:charsh18@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <form>
        <input type="text" placeholder="Name" value={name} onChange={handleNameChange} required />
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
        <textarea placeholder="Message" value={message} onChange={handleMessageChange} required></textarea>
        <button className="btn" type="button" onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
};

export default Contact;
