import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'; // Importing react-spring
import './Dashboard.css'

function AnimatedNumber({ value }) {
  const props = useSpring({
    value,
    from: { value: 0 },
    config: { duration: 10000 },
  });

  return <animated.h4>{props.value.interpolate(val => Math.floor(val))}</animated.h4>;
}

function Dashboard() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col lg={3} md={6} sm={12} className="mb-3">
          <Card className="premium-card">
            <Card.Body className="text-center">
              <Card.Title>Total Employees</Card.Title>
              <Card.Text>
                <AnimatedNumber value={120} /> {/* Example value */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12} className="mb-3">
          <Card className="premium-card">
            <Card.Body className="text-center">
              <Card.Title>Department</Card.Title>
              <Card.Text>
                <AnimatedNumber value={10} /> {/* Example value */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12} className="mb-3">
          <Card className="premium-card">
            <Card.Body className="text-center">
              <Card.Title>Leave Application</Card.Title>
              <Card.Text>
                <AnimatedNumber value={500} /> {/* Example value */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={12} className="mb-3">
          <Card className="premium-card">
            <Card.Body className="text-center">
              <Card.Title>Payslips</Card.Title>
              <Card.Text>
                <AnimatedNumber value={50} /> {/* Example value */}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;