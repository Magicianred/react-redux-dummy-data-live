import {
    CLEAR_POSTS,

    FETCH_POSTS,
    FETCH_MORE_POSTS,
    FETCH_POST,
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,

    // DUMMY DATA
    FETCH_POSTS_DUMMY_DATA,
    FETCH_MORE_POSTS_DUMMY_DATA,
    FETCH_POST_DUMMY_DATA,
    CREATE_POST_DUMMY_DATA,
    UPDATE_POST_DUMMY_DATA,
    DELETE_POST_DUMMY_DATA
} from './../actionTypes/posts';

import {
    POSTS_ENDPOINTS,
    USE_DUMMY_DATA
} from './../../enums/posts';

const SIZE_FOR_PAGE = 10;

/**
 * Fetch posts list
 */
export const fetchPosts = (options = {}) => {
    let {
        page,
        pageSize,
        sort,
        order
    } = options;

    // default params
    page = page ? page : 1;
    pageSize = pageSize ? pageSize : SIZE_FOR_PAGE;
    sort = sort ? sort : 'createDate';
    order = order ? order : 'desc';

    if(USE_DUMMY_DATA) {
        return {
            type: FETCH_POSTS_DUMMY_DATA,
            payload: {
                isLoading: false,
                params: {
                    page, pageSize, sort, order
                }
            }
        }
    } else {
        const [ endpoint, method ] = POSTS_ENDPOINTS.LIST;
        return {
            type: FETCH_POSTS,
            payload: {
                isLoading: true,
                url: endpoint,
                method: method,
                params: {
                    page, pageSize, sort, order
                }
            }
        }
    }
};

/**
 * Fetch more posts list
 */
export const fetchMorePosts = () => {
    if(USE_DUMMY_DATA) {
        return {
            type: FETCH_MORE_POSTS_DUMMY_DATA
        }
    } else {
        return {
            type: FETCH_MORE_POSTS
        }
    }
}


/**
 * Fetch a single Post
 */
export const fetchPost = ({ id }) => {
    if(USE_DUMMY_DATA) {
        return {
            type: FETCH_POST_DUMMY_DATA,
            payload: {
                id: id
            }
        }
    } else {
        return {
            type: FETCH_POST
        }
    }
}


/**
 * Update a single Post
 */
export const updatePost = () => {
    if(USE_DUMMY_DATA) {
        return {
            type: UPDATE_POST_DUMMY_DATA
        }
    } else {
        return {
            type: UPDATE_POST
        }
    }
}


/**
 * Delete a single Post
 */
export const deletePost = () => {
    if(USE_DUMMY_DATA) {
        return {
            type: DELETE_POST_DUMMY_DATA
        }
    } else {
        return {
            type: DELETE_POST
        }
    }
}


/**
 * Create a new Post
 */
export const createPost = () => {
    if(USE_DUMMY_DATA) {
        return {
            type: CREATE_POST_DUMMY_DATA
        }
    } else {
        return {
            type: CREATE_POST
        }
    }
}

/**
 * Clear posts list
 */
export const clearPosts = () => {
    return {
        type: CLEAR_POSTS
    }
};