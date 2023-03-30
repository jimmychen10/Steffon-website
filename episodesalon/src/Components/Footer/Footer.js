import React from 'react'
import {Container,Row, Col} from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
    <Container>
      <Row>
        <Col md={6}>
          <h5>Location</h5>
          <p> 1360 Church Street</p>
          <p> San Francisco, CA 94114</p>
        </Col>
        <Col md={3}>
          <h5>Opening hours</h5>
          <ul className="list-unstyled">
            <li>Tuesday - Friday: 10:00AM - 8:00pm </li>
            <li>Saturday - Sunday: 9:30AM- 7:30PM</li>
            <li>Monday Closed</li>
            <li>Early or after hours are by appointments only.</li>
          </ul>
        </Col>
        <Col md={3}>
          <h5>Contact Us</h5>
          <ul className="list-unstyled">
            <li>ADDRESS: 1360 Church Street, San Francisco, CA 94114</li>
            <li>PHONE: 415-641-1138</li>
            <li>TEXT: 415-810-7812</li>
            <li>EMAIL: steffon639@gmail.com</li>
          </ul>
        </Col>
      </Row>
      <hr />
      <p className="text-center">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </p>
    </Container>
  </footer>
  )
}
