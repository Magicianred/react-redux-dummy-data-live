export const USE_DUMMY_DATA = true;
  
// eslint-disable-next-line import/prefer-default-export
export const constants = {
    api: {
        url: 'https://jsonplaceholder.typicode.com',
    },
    paramsName: {
        "page": "_start",
        "pageSize": "_limit"
    },
    paths: {
        posts: '/posts',
        postDetails: '/posts/{id}',

        // categories: '/categories',
        // categoryDetails: '/categories/{id}',
    },
}