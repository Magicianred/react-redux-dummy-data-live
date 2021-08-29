import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import AboutSection from './AboutSection';
import BlogSection from './BlogSection';
import PostList from './../Pages/Blog/PostList';
import PostDetails from './../Pages/Blog/PostDetails';

/**
 * Functional Component for handle routes of sites.
 * 
 * @component
 * @example
 * return (
 *   <SiteRoutes />
 * )
 */
const SiteRoutes = () =>
    <Switch>
        <Route exact path="/" component={Home} />

        {/* // TO DO fix path with BlogSection */}
        <Route path="/blog/:id" component={PostDetails} /> 
        
        <Route path="/blog" component={BlogSection} />
        <Route path="/about" component={AboutSection} />
        <Route exact path="/error" component={Error} />
        
        <Route  path="*" component={NotFound} />
    </Switch>

export default SiteRoutes;