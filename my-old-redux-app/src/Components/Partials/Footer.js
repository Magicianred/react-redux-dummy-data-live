import React from 'react';

/**
 * Functional Component for showing the footer of the site
 * @component
 * @example
 * return (
 *  <Footer />
 * )
 */
const Footer = () => {
    return (
        <footer className="partial footer" style={{ borderTop: "solid thin black" }}>
            <p>
                This is the footer
            </p>
            <p>
                This site is store in <a target="_blank" rel="noreferrer" href="https://github.com/MagicianredLabs/react-dummy-data-live">GitHub Repository </a>.
            </p>
            <p>
                It is a test in <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React </a>
                under <a href="https://github.com/Magicianred/react-simple-app/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT License</a>.
            </p>
        </footer>
    )
}

export default Footer;