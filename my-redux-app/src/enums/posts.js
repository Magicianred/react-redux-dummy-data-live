import { HTTP_METHOD }  from './http';

/**
 * Active/Disable dummy data for post
 */
export const USE_DUMMY_DATA = true;

/**
 * Url base for all urls of posts
 */
const urlBase = '/posts';

/**
 * URLs for UI posts
 */
export const POSTS_URLS = {
    LIST: urlBase,
    READ: `${urlBase}/{id}`,
    EDIT: `${urlBase}/{id}/edit`
};

/**
 * Endpoints for all webapi posts
 */
const endpointBase = '/api/posts/';

/**
 * Endpoints for webapi posts
 */
export const POSTS_ENDPOINTS = {
    LIST: [endpointBase, HTTP_METHOD.GET],
    CREATE: [endpointBase, HTTP_METHOD.POST],
    READ: [`${endpointBase}/{id}`, HTTP_METHOD.GET],
    EDIT: [`${endpointBase}/{id}`, HTTP_METHOD.PUT],
    DELETE: [`${endpointBase}/{id}`, HTTP_METHOD.DELETE]
};
