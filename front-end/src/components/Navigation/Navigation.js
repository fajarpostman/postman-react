import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../Styles/Styles.scss";

export default function Navigation() {
  return (
    <>
      <nav className="main-navigation">

      </nav>
      {/* <Navbar
        collapseOnSelect
        bg="light"
        variang="light"
        expand="lg"
        sticky="top"
        className="navigation-shadow"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              src="../../images/fajar_postman_logo.png"
              className="image-navigation"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="https://travel.fajarpostman.com/" target="_blank">
                Travel
              </Nav.Link>
              <Nav.Link href="/">Stay Connect!</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
    </>
  );
}
