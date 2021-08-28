import React from 'react';
import { Route, useRouteMatch, Redirect } from 'react-router-dom';

import PostListPage from './../Pages/Blog/PostListPage';
import PostDetailsPage from './../Pages/Blog/PostDetailsPage';

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
                    <PostListPage />
                )}
            />
            <Route
                path="/blog/:id"
                render={() => {
                    <PostDetailsPage />
                }}
            />
            <Redirect to={match.url} />
        </>
    )}
);

export default BlogSection;