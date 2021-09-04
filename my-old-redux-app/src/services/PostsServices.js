import { USE_DUMMY_DATA, constants } from './../config';
import request from './BaseService'
import PostsStore from './../stores/PostsStore';

// Simulate POST posts
const addPost = (item) => {
    if(USE_DUMMY_DATA) {
        PostsStore.addItem(item);
    } else {
        return request({
            url: constants.paths.posts,
            method: 'POST',
            data: item
        })
    }
}

// Simulate DELETE posts/:id
const deletePostById = (id) => {
    if(USE_DUMMY_DATA) {
        PostsStore.removeItemById(id);
    } else {
        return request({
            url: constants.paths.postDetails.replace('{id}', id.toString()),
            method: 'DELETE'
        })
    }
}

// Simulate PUT posts/:id
const updatePostById = (id, values) => {
    if(USE_DUMMY_DATA) {
        const item = getPostById(id);
        if (!item) {
            return null;
        }
        Object.assign(item, values);
        return item;
    } else {
        return request({
            url: constants.paths.postDetails.replace('{id}', id.toString()),
            method: 'PUT',
            data: values
        })
    }
}

// Simulate GET posts
const getAllPosts = (page = 1, pageSize = 3) => {
    if(USE_DUMMY_DATA) {
        return PostsStore.getItems();
    } else {
        let url = constants.paths.posts;
        url = `${url}?${constants.paramsName.page}=${page}`;
        url = `${url}&${constants.paramsName.pageSize}=${pageSize}`;
        return request({
            url: url,
            method: 'GET',
            // transformResponse: [(data) => {
            //   // transform the response
          
            //   return data;
            // }]
        })
    }
}

// Simulate GET posts/:id
const getPostById = (id) => {
    if(USE_DUMMY_DATA) {
        return PostsStore.getItems()
            .filter(item => item.id === +id)
            .pop();
    } else {
        return request({
            url: constants.paths.postDetails.replace('{id}', id.toString()),
            method: 'GET',
        })
    }
}

const getPostByCategoryId = (categoryId) => {
    if(USE_DUMMY_DATA) {
        return PostsStore.getItemsByCategoryId(categoryId);
    } else {
        let url = constants.paths.posts;
        url = `${url}/?catId=${categoryId}`
        return request({
            url: url,
            method: 'GET',
        })
    }
}

/**
 * Service class to handle retrieve of items data
 */
 export const PostsService = {
    addPost,
    deletePostById,
    updatePostById,
    getAllPosts,
    getPostById,
    getPostByCategoryId,
}

export default PostsService