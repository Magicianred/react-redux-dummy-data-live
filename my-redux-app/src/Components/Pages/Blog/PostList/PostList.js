import React, { Fragment, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import isArray from 'lodash/isArray';
import noop from 'lodash/noop';
import { Link,useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPosts } from './../../../../services/slices/posts';
import { fetchCategories } from './../../../../services/slices/categories';
import { PostPropType } from '../../../../PropTypes/Post';

const PostList = () => {
    const history = useHistory();
    const match = useRouteMatch();

    const isLoading = useSelector((state) => {
        console.log({state})
        return state && state.reducer ? state.reducer.isLoading : false
    });
    const hasNextPage = useSelector((state) => state && state.reducer ? state.reducer.hasNextPage : false);
    const {
        totalSize,
        page,
        pageSize,
        result
    } = useSelector((state) => state && state.reducer && state.reducer.data ? state.reducer.data : { 
        totalSize: 0,
        page: 0,
        pageSize: 0,
        result: []
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const action = { 
            page: 1, 
            pageSize: 3,
            sort: 'title',
            order: 'desc',
            query: ''
        };
        // dispatch(fetchPosts(action));
        dispatch(fetchCategories(action));
    }, [dispatch]);

    /**
     * Handle go to details
     */
    const handleDetails = useCallback((id) => {
      history.push(`${match.url}/${id}`);
    }, [history, match]);

    return (
        <Fragment>
            {isLoading && (<div>isLoading...</div>)}
            {!isLoading && result && isArray(result) ? 
                result.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <Link to={`/blog/${item.id}`}>Go to details</Link>
                        <button onClick={() => handleDetails(item.id)}>Go to details</button>
                    </div>
                )) : null}
        </Fragment>
    )
}

PostList.propTypes = {
    isLoading: PropTypes.bool,
    item: PropTypes.arrayOf(PostPropType),
    onDetails: PropTypes.func
}

PostList.defaultProps = {
    isLoading: false,
    item: undefined,
    onDetails: noop
}

export default PostList;