// Contact.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.style.scss'; // Import the SCSS file
import FlowersImage from '../../Assests/Flowers  (1).jpg'; // Import the image

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g., send it to a server)
    console.log(formData);
    // You can add your own logic here to process the form data
  };

  return (
    <div className="contact-container">

      {/* Left side with the image */}
      <div className="contact-image">
        <img src={FlowersImage} alt="Flowers" />
        <div class="centered"> <h2>Contact Us</h2></div>
      </div>

      {/* Right side with the contact details and form */}
      <div className="contact-content">
        <div className="contact-details">
          <p> 1360 Church Street, San Francisco, CA 94114</p>
          <div className="contact-info">
            <p>steffon639@gmail.com</p>
            {/* <div className="vertical-line"></div> */}
            <p className='ml-4'> 415-641-1138</p>
          </div>
        </div>
        <div className={`contact-form ${'mobile-friendly'}`}>
          <Form onSubmit={handleSubmit}>
            <div className='contact-form-row'>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name <span>*</span></Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="phoneNumber">
              <Form.Label>Phone Number <span>*</span></Form.Label>
              <Form.Control type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </Form.Group>
            </div>


            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email </Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" value={formData.message} onChange={handleChange}rows={4} />
            </Form.Group>
            <Button variant="primary" type="submit" className="contact-submit-button">
              Send
            </Button>


          </Form>
        </div>
        <div className="social-links">
        <a href="https://www.facebook.com/steffonyhair/" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://twitter.com/SteffonYHair" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://www.tiktok.com/@steffonyan?lang=en" target="_blank" rel="noopener noreferrer">
          TikTok
        </a>
      </div>
      </div>

      {/* Social Media Links */}



    </div>
  );
}
