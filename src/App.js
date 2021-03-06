import './App.css';
import React from "react"
import {Form, Row, Button} from "react-bootstrap"

function App() {
  return (
    <div className="App">
    <Form>
  <Row className="mb-3">
    <Form.Group controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formGridPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Address" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Row className="mb-3">
    <Form.Group controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control placeholder="Enter City" /> 
    </Form.Group>

    <Form.Group controlId="formGridState">
      <Form.Label>State</Form.Label> 
      <Form.Control placeholder="Enter State" />
    </Form.Group>

    <Form.Group controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" id="formGridCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default App;
