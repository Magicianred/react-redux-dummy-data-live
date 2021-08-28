import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import About from '../Pages/About';
import WhoAre from '../Pages/About/WhoAre';
import WhereAre from '../Pages/About/WhereAre';

/**
 * Functional Component for handle routes to About Section.
 * 
 * @component
 * @example
 * return (
 *   <AboutSection />
 * )
 */
const AboutSection = withRouter(props =>
    <>
        <Route exact path={`${props.match.url}`} component={About} />
        <Route exact path={`${props.match.url}/whoare`} component={WhoAre} />
        <Route exact path={`${props.match.url}/whereare`} component={WhereAre} />
    </>
);

export default AboutSection;