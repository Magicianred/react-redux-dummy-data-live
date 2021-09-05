import React, { Fragment, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import isArray from 'lodash/isArray';
import noop from 'lodash/noop';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PostsService from './../../../../services/PostsService';
import { enableLoading, disableLoading } from './../../../../redux/slices/loader';
import { setLoading, savePosts, clearPosts } from './../../../../redux/slices/posts';
// import { fetchCategories } from './../../../../redux/slices/categories';
import { PostPropType } from '../../../../PropTypes/Post';

const PostList = () => {
    const history = useHistory();
    const match = useRouteMatch();

    const dispatch = useDispatch();
    
    const isLoading = useSelector((state) => {
        console.log('useSelector',{state})
        const loading = state && state.loader ? state.loader.isLoading : false;
        return loading;
    });

    const {
        // isLoading,
        hasNextPage,
        query,
        data: {
            totalSize,
            page,
            pageSize,
            result
        }
    } = useSelector((state) => {
        console.log('useSelector',{state})
        const newState = state && state.posts ? state.posts : {
            // isLoading: false,
            hasNextPage: false,
            query: undefined,
            data: {
                totalSize: 0,
                page: 1,
                pageSize: 3,
                result: []
            }
        }
        console.log({newState})
        return newState;
    });

    useEffect(() => {
        let payload = { 
            page: 1, 
            pageSize: 3,
            // sort: 'title',
            // order: 'desc',
            // query: '',
            hasNextPage: false,
        };
        dispatch(enableLoading());
        dispatch(setLoading(true));
        dispatch(clearPosts());
        const data = PostsService.getAllPosts(page, pageSize)
        if(data instanceof Promise) {
            data.then((resp) => {
                payload.data = { 
                    totalSize: resp.length,
                    page: 1,
                    pageSize: resp.length,
                    result: resp
                  };
                dispatch(disableLoading());
                dispatch(savePosts(payload));
            })
            .catch((err) => {
                dispatch(clearPosts());
                console.error('An error occurred: ', {err})
            })
        } else {
            payload.data = { 
                totalSize: data.length,
                page: 1,
                pageSize: data.length,
                result: data
              };
            dispatch(disableLoading());
            dispatch(savePosts(payload));
        }
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
                result.map((item, index) => item && (
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