import React, { Fragment } from 'react';
import { Route, useRouteMatch, Redirect } from 'react-router-dom';
import PostListPage from './PostListPage';
import PostDetailsPage from './PostDetailsPage';

/**
 * Make routing for Post section
 */
const Post = () => {
    const match = useRouteMatch();

    // TO DO make works route
    return (
        <Fragment>
            <Route
                exact
                path={match.url}
                render={() => (
                    <PostListPage />
                )}
            />
            <Route
                path={`${match.url}/:id`}
                render={() => {
                    <PostDetailsPage />
                }}
            />
            <Redirect to={match.url} />
        </Fragment>
    )
}

export default Post;