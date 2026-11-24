import React from "react";
// Importing specific components from react-bootstrap
import { Navbar, Container, Nav, Card, Row, Col, Form, Button} from "react-bootstrap";

function App() {
  return (
    // This is the React Fragment (empty tags)
    <>
      {/* Navigation Bar Section */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My React App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="App">
        <Container className="mt-4">
          <h1 className="text-center mb-4">Welcome to My Project</h1>

          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <br></br>

          {/* Form Section - Required for Checkpoint Evaluation */}
          <Row className="justify-content-center">
            <Col md={6}>
              <Card className="p-4 shadow">
                <Card.Title className="text-center mb-3">Contact Us</Card.Title>
                <Form>
                  {/* Form Group for Email Input */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>

                  {/* Form Group for Feedback/Message */}
                  <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Your feedback..."
                    />
                  </Form.Group>

                  {/* Submit Button */}
                  <Button variant="primary" type="submit" className="w-100">
                    Submit Form
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
