import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';

export default function NavBar() {

    return (
        <Navbar bg="dark" variant="dark" fixed='top'>
            <Container>
                <Navbar.Brand href="#">Movie App</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#">Features</Nav.Link>
                    <Nav.Link href="#">Pricing</Nav.Link>
                </Nav>

                <div className="search-box">
                    <button className="btn-search"><GoSearch /></button>
                    <input type="text" className="input-search" placeholder="Type to Search..." />
                </div>
            </Container>
        </Navbar>
    )
}