import React from 'react';
import { Route, useRouteMatch, Redirect } from 'react-router-dom';

import PostList from './../Pages/Blog/PostList';
import PostDetails from './../Pages/Blog/PostDetails';

/**
 * Functional Component for handle routes to Blog Section.
 * 
 * @component
 * @example
 * return (
 *   <BlogSection />
 * )
 */
const BlogSection = (() => {
    const match = useRouteMatch();

    return (
        <>
            <Route
                exact
                path="/blog"
                render={() => (
                    <PostList />
                )}
            />
            <Route
                path="/blog/:id"
                render={() => {
                    <PostDetails />
                }}
            />
            <Redirect to={match.url} />
        </>
    )}
);

export default BlogSection;