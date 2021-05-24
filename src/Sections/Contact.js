import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../App.css";
const Contact = () => {
  return (
    <div className="contact">
      <Container className="Form_Header">
        <h1 className="Form_top">Contact Here</h1>
        <Form>
          <Row className="First_row">
            <Col>
              <Form.Group controlId="formBasicEmail" className="form_my_control">
                <Form.Control type="name" placeholder="Enter name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                controlId="formBasicPassword"
                className="form_my_control"
              >
                <Form.Control type="email" placeholder="email" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formBasicEmail" className="form_my_control">
            <Form.Control type="name" placeholder="Enter subject" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1" className="Form_textarea"   >
            <Form.Control as="textarea" rows={3} placeholder="your message" />
          </Form.Group>
          <Button variant="primary" type="submit" className="Form_button">
            Send
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
