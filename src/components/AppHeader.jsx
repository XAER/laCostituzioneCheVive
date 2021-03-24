import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const AppHeader = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        style={{backgroundColor: '#1e56a0', height: "10vh"}}
        variant="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand style={{fontSize: "1.5rem"}} href="/">La Costituzione che Vive</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link style={{fontSize: "1.1rem", paddingLeft: "2rem", color:"#f6f6f6"}} href="/project">Progetto</Nav.Link>
              <Nav.Link style={{fontSize: "1.1rem", paddingLeft: "2rem", color:"#f6f6f6"}} href="/articles">Articoli</Nav.Link>
              <Nav.Link style={{fontSize: "1.1rem", paddingLeft: "2rem", color:"#f6f6f6"}} href="/contacts">Contatti</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppHeader;
