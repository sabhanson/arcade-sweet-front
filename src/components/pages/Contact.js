import React from "react";
import { Form, Button } from "react-bootstrap";

const styles = {
  h1: {
    marginTop: "30px",
    color: "white",
    textShadow: "2px 2px 3px #f46036",
  },
  form: {
    background: "#1B998B",
    border: "5px double white",
    margin: "10px",
    boxShadow: "0px 0px 20px black",
    borderRadius: "15px",
  },
  formGroup: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px 10px 0px",
  },
  formInput: {
    width: "100%",
  },
  button: {
    padding: "3px",
    border: "2px solid #f46036",
    background: "#F46036",
    color: "white",
    borderRadius: "7px",
    margin: "10px",
  },
};

export function Contact() {
  return (
    <div className="row justify-content-center">
      <h1 style={styles.h1}>Contact Us</h1>
      <Form className="col-sm-8 col-lg-6" style={styles.form}>
        <Form.Group
          style={styles.formGroup}
          className="row"
          controlId="formBasicName"
        >
          <Form.Control
            className="col-12"
            style={styles.formInput}
            type="text"
            placeholder="Enter your name..."
          />
        </Form.Group>
        <Form.Group
          style={styles.formGroup}
          className="row"
          controlId="formBasicEmail"
        >
          <Form.Control
            className="col-12"
            style={styles.formInput}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group
          className="row"
          controlId="formBasicMessage"
          style={styles.formGroup}
        >
          <Form.Control
            style={styles.formInput}
            type="test"
            placeholder="your message here..."
          />
        </Form.Group>
        <Button style={styles.button} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
