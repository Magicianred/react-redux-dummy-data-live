import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * Component for showing the 404 page.
 * 
 * @component
 * @example
 * return (
 *   <NotFound />
 * )
 */
const NotFound = () => {
    return (
        <div className="page">
            <Jumbotron className="page notfound">
                <h2>404 Page not found</h2>
                <p>The page is not found</p>
            </Jumbotron>
        </div>
    );
}

export default NotFound;