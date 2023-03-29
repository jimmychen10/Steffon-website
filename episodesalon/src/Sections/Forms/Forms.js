import React from 'react'
import "./Forms.scss"

import {Container, Button, Col, Row, Form } from "react-bootstrap";

export default function Forms() {
  return (

    <Form className="w-75">
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="password" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="password" placeholder="Enter Phone" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}controlId="formGridAddress1">
          <Form.Label>Date</Form.Label>
          <Form.Control placeholder="Enter Date" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Time</Form.Label>
          <Form.Control placeholder="Time" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
