import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import PostsService from './../../../../services/PostsService';
import { enableLoading, disableLoading } from './../../../../redux/slices/loader';
import { setLoading, savePost, clearPost } from './../../../../redux/slices/posts';

import { PostPropType } from './../../../../PropTypes/Post'

const PostDetails = () => {
    const { id } = useParams();

    const dispatch = useDispatch();
    
    const isLoading = useSelector((state) => {
        console.log('useSelector',{state})
        const loading = state && state.loader ? state.loader.isLoading : false;
        return loading;
    });

    const item = useSelector((state) => {
        console.log('useSelector',{state})
        const newState = state && state.posts && state.posts.details ? state.posts.details : undefined
        console.log({newState})
        return newState;
    });

    useEffect(() => {
        let payload = {};
        console.log('useEffect -> id', id)
        if(id) {
            dispatch(enableLoading());
            dispatch(setLoading(true));
            dispatch(clearPost());

            const data = PostsService.getPostById(id);
            console.log('useEffect -> data', data)
            if(data instanceof Promise) {
                data.then((resp) => {
                    payload = resp;
                    dispatch(disableLoading());
                    dispatch(savePost(payload));
                })
                .catch((err) => {
                    dispatch(clearPost());
                    console.error('An error occurred: ', {err})
                })
            } else {
                payload.data = data;
                dispatch(disableLoading());
                dispatch(savePost(payload));
            }
        } else {
            dispatch(clearPost());
        }
    }, [id, dispatch]);

    return (
        <Fragment>
            {isLoading && (<div>loading...</div>)}
            {!isLoading && item ? (
                <div>
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                </div>
            ) : null}
        </Fragment>
    )
}

PostDetails.propTypes = {
    isLoading: PropTypes.bool,
    item: PostPropType
}

PostDetails.defaultProps = {
    isLoading: false,
    item: undefined
}

export default PostDetails;