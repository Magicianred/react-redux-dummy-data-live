import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

/**
 * Component for showing the menu of About Section
 * @component
 * @example
 * return (
 *  <Footer />
 * )
 */
const AboutSectionMenu = () => {
    return (
        <header className="partial about menu" style={{ borderTop: "solid thin black", borderBottom: "solid thin black" }}>
            <Navbar className="justify-content-center" fill="true" variant="tabs">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link id="whoare_link" href="/about/whoare">Who Are</Nav.Link>
                        <Nav.Link id="whereare_link" href="/about/whereare">Where Are</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default AboutSectionMenu;