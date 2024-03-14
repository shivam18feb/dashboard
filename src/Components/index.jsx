import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FlushExample from "../Components/Noticeboard";
import Dashboard from "./dash";
import Sidebar from "./Navbar";

function AutoLayoutVariableExample() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center" style={{ minHeight: "100vh" }}>
        <Sidebar></Sidebar>
        <Col
          xs={12}
          lg={10}
          style={{
            backgroundColor: "#e9ecef",
            // padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Container
            fluid
            style={{
              backgroundColor: "#343A40",
              height: "100px",
              padding: "10px",
              width: "80%",
              marginTop: "24px",
            }}
          >
            <h2
              style={{
                margin: 0,
                textAlign: "center",
                fontFamily: "Roboto, sans-serif",
                color: "white",
              }}
            >
              Welcome to the Employee Management<br></br> System Dashboard
            </h2>
          </Container>
          <Container fluid style={{ marginTop: "20px" }}>
            <Dashboard></Dashboard>
          </Container>

          <Container fluid style={{ marginTop: "30px" }}>
            <Row>
              <Col xs={12} md={6}></Col>
              <Col xs={12} md={6}>
                <FlushExample></FlushExample>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutVariableExample;
