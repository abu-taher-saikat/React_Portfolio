import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "../App.css";
const Contact = (props) => {
  const [boxs, setBoxs] = useState([
    {
      address: " 144 Mangan St, Miami, FL",
      addressName: "Address",
      IconStyle: "fas fa-map-marked-alt",
    },
    {
      address: "  +987 654 3210",
      addressName: "Call Us",
      IconStyle: "fas fa-mobile-alt",
    },
    {
      address: " hello@beingeorge.com",
      addressName: "Email Us",
      IconStyle: "fas fa-envelope ",
    },
  ]);

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert("Thank you for your feedback!");
    }
  };

  const findFormErrors = () => {
    const { name, email, text, comment } = form;
    const newErrors = {};
    // name errors
    let isValid = true;

    if (!name || name === "") newErrors.name = "cannot be blank!";
    else if (name.length > 30) newErrors.name = "name is too long!";
    // food errors
    if (!email || email === "") newErrors.email = "select a email!";


  

           

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    
      if (!pattern.test(form["email"])) {
    
        isValid = false;
    
        newErrors.email = "Please enter valid email address.";
    
      }
    
    



    // rating errors
    if (!text || text > 5 || text < 1)
      newErrors.text = "must assign a rating between 1 and 5!";
    // comment errors
    if (!comment || comment === "") newErrors.comment = "cannot be blank!";
    else if (comment.length > 100) newErrors.comment = "comment is too long!";

    return newErrors;
  };
  return (
    <div className="contact">
      <div className="contact_box container pt-5">
        <h2>Get in Touch</h2>
        <div class="row">
          {boxs.map((box) => (
            <div class="col-md-4 col-lg-4 ">
              <div
                class="contact-details--panel p-4 b-box text-center hover-state wow fadeInUp bg-white"
                data-wow-duration="1.5s"
              >
                <div class="mb-4">
                  <i class={box.IconStyle} style={{ fontSize: "30px" }}></i>
                </div>
                <div class="mt-2">
                  <a href="#" class="">
                    {box.address}
                  </a>
                  <p class="mt-1 font-weight-bold ">{box.addressName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Container className="Form_Header">
        <h1 className="Form_top">Contact Here</h1>
        <Form>
          <Row className="First_row">
            <Col>
              <Form.Group
                controlId="formBasicEmail"
                className="form_my_control"
                
              >
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  onChange={(e) => setField("name", e.target.value)}
                  isInvalid={!!errors.name}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                controlId="formBasicPassword"
                className="form_my_control"
              >
                <Form.Control
                  type="email"
                  placeholder="email"
                  onChange={(e) => setField("email", e.target.value)}
                  isInvalid={!!errors.email}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="formBasicEmail" className="form_my_control">
            <Form.Control
              type="name"
              placeholder="Enter subject"
              onChange={(e) => setField("text", e.target.value)}
              isInvalid={!!errors.text}
            />
          </Form.Group>
          <Form.Group
            controlId="exampleForm.ControlTextarea1"
            className="Form_textarea"
          >
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="your message"
              onChange={(e) => setField("comment", e.target.value)}
              isInvalid={!!errors.comment}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="Form_button"
            onClick={handleSubmit}
          >
            Send
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
