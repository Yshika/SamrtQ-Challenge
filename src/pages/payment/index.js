import React, { useContext, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Context } from "../../context";
import "./style.scss";
const Payment = () => {
  const { paymentMethods = [] } = useContext(Context);
  console.log(paymentMethods);
  return (
    <div>
      <div className="heading">Order details</div>
      <div className="heading event">Event details</div>

      <div className="card-container container">
        <Form className="card-container-form">
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group controlId="number" className="mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control type="number" maxLength="10" required />
          </Form.Group>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Event Name</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Event Location</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Event Date</Form.Label>
            <Form.Control type="date" required />
          </Form.Group>
          <Form.Group controlId="name" className="mb-3">
            <Form.Label>Delivery Mode</Form.Label>
            <Form.Control type="text" required />
          </Form.Group>
        </Form>
      </div>
      <div className="heading event">Select payment method</div>

      <div className="card-container container">
        {paymentMethods?.map((ele, i) => {
          return (
            <div key={i}>
              <input type="radio" value={ele?.value} />
              {ele?.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Payment;
