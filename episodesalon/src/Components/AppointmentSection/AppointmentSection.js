import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import './AppointmentSection.style.scss'; // Import the SCSS file for styling
import "../AppointmentSection/AppointmentSection.style.scss";

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    date: '',
    time: '', // Changed from "service" to "time"
    message: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data (e.g., send it to a server)
    console.log(formData);
    // You can add your own logic here to process the form data
  };

  return (
    <section>
      <h2 className="appointment-title">Appointment</h2>
      <div className="form-container">
        <Form onSubmit={handleSubmit}>
          <div className="form-row">
            <Form.Group controlId="name" className="form-group">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
                required // Make the "Name" field mandatory
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="email" className="form-group">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </Form.Group>
          </div>
          <div className="form-row">
            <Form.Group controlId="subject" className="form-group">
              <Form.Label>Subject:</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Enter your subject..."
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="phone" className="form-group">
              <Form.Label>Phone:</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your phone..."
                value={formData.phone}
                onChange={handleChange}
                required // Make the "Phone" field mandatory
                className="form-control"
              />
            </Form.Group>
          </div>
          <div className="form-row">
            <Form.Group controlId="date" className="form-group">
              <Form.Label>Date:</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required // Make the "Date" field mandatory
                className="form-control"
              />
            </Form.Group>
            <Form.Group controlId="time" className="form-group">
              <Form.Label>Time:</Form.Label> {/* Changed from "Service" to "Time" */}
              <Form.Control
                type="text" // Changed from "select" to "text" input
                name="time" // Changed from "service" to "time"
                value={formData.time}
                onChange={handleChange}
                required
                placeholder="Enter the time..."
                className="form-control"
              />
            </Form.Group>
          </div>
          <div className="form-row">
            <Form.Group controlId="message" className="form-group">
              <Form.Label>Message:</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
              />
            </Form.Group>
          </div>
          <Button className="submit-button" type="submit">Submit</Button>
        </Form>
      </div>
    </section>
  );
};

export default AppointmentSection;
