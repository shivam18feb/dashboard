import React from 'react';
import { Col, Navbar, Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Col xs={12} lg={2} style={styles.sidebar}>
      <Navbar expand="lg" className="flex-column">
        <Navbar.Brand href="#" style={styles.brand}>
          Employee Management System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto flex-column">
            <NavItem link="#" text="Home" />
            <NavItem link="#" text="Department" />
            <NavItem link="#" text="Salary Slips" />
            <NavItem link="#" text="Add Employees" />
            <NavItem link="#" text="Employee List" />
            <NavItem link="#" text="Contact Us" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Col>
  );
};

const NavItem = ({ link, text }) => (
  <Nav.Link href={link} style={styles.navLink}>
    {text}
  </Nav.Link>
);

const styles = {
  sidebar: {
    backgroundColor: "#343a40",
    padding: "20px",
    borderRadius: "8px",
    color: "#fff",
    marginBottom: "20px",
    
  },
  brand: {
    margin: "0",
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    color: "#fff",
    fontSize: "1.2rem",
  },
  navLink: {
    padding: "8px 0",
    textAlign: "center",
    fontFamily: "Montserrat, sans-serif",
    color: "#fff",
    textDecoration: "none", // Added text decoration to remove underline from links
  },
};

export default Sidebar;
