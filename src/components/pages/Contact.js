import React from "react";
import { Form, Button } from "react-bootstrap";
import "./styles/Contact.css";


export function Contact() {
  return (
    <div className="row justify-content-center">
      <h1 className="title">Feedback Form</h1>
      <Form className="mainForm col-sm-8 col-lg-6">
        <Form.Group
          className="formGroup row"
          controlId="formBasicName"
        >
          <Form.Control
            className="formInput col-12"
            type="text"
            placeholder="Name"
          />
        </Form.Group>
        <Form.Group
          className="formGroup row"
          controlId="formBasicEmail"
        >
          <Form.Control
            className="formInput col-12"
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group
          className="formGroup row"
          controlId="formBasicMessage"
        >
          <Form.Control
            className="formInput"
            type="test"
            placeholder="Share your thoughts..."
          />
        </Form.Group>
        <Button className="btn third" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Contact;