import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


const AppHeader = () => {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="sm" bg="primary" variant="dark">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Navbar.Brand href="/">La Costituzione che Vive</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link href="/project">Progetto</Nav.Link>
                            <Nav.Link href="/articles">Articoli</Nav.Link>
                            <Nav.Link href="/contacts">Contatti</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default AppHeader
