import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './../../logo.svg';

/**
 * Functional Component for showing the header of the site.
 * @component
 * @param {string} title Title of the site
 * @example
 * const sitename = 'my site name'
 * return (
 *   <Header title={sitename} />
 * )
 */
const Header = ({ title }) => {
    return (
        <header className="partial header">
            <>
                <Navbar bg="light">
                    <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt={`${title} logo`}
                    />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link id="home_link" href="/">Home</Nav.Link>
                            <Nav.Link id="blog_link" href="/blog">Blog</Nav.Link>
                            <Nav.Link id="about_link" href="/about">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        </header>
    );
}

Header.propTypes = {
    /**
     * Title of the site
     */
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'Default Site title'
}

export default Header;