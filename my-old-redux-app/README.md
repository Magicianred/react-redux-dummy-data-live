# react-redux-dummy-data-live (old style)
An experimentation of active dummy data in react and redux. This is useful for test components in isolation.

## Install npm packages

```cmd
npm install react-redux immutability-helper
```

- react-redux enable use of redux in react
- immutability-helper enable use of immutable in reducers

## Create enums (optional)

to make the code more readable and maintainable, for each entity create enums and constants keeps shared information

```javascript
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
```

## Create some data transformation function (optional)

to make the code more readable and maintainable, for each entity create transformation function in order to convert data from webapi to client and viceversa. So when we have changes (for example name changes, etc) we can fix only this functions and the rest of the code remain untouched.

```javascript
import isArray from 'lodash/isArray';

// convert data for details view
export const transformToDetails = ((data) => {
    return {
        id: data.id,
        title: data.title,
        description: data.description,
        text: data.text,
        categories: data.categories && isArray(data.categories) ?
            data.categories.map(cat => { return cat ? {
                id: cat.id,
                name: cat.name
            } : null })
        : null,
        createDate: data.createDate
    };
});

// convert data for list view
export const transformToList = ((data) => {
    return data && isArray(data) && data.map(item => { return transformToDetails(item)});
});
```

## Create actionTypes (optional)

to make the code more readable and maintainable, for each entity create constants for named actions of redux, otherwise you can use directly plain test when call and declare actions.

```javascript
export const FETCH_POSTS = 'FETCH_POSTS';

// DUMMMY DATA
export const FETCH_POSTS_DUMMY_DATA = 'FETCH_POSTS_DUMMY_DATA';
```

## Create actions

for each entity create actions

```javascript
import {
    FETCH_POSTS,

    // DUMMY DATA
    FETCH_POSTS_DUMMY_DATA
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
```

## Create reducers for each entity

for each entity create a reducer, use *immutability-helper* (or another immutable library) to handle store data

```javascript
import update from 'immutability-helper';
import isArray from 'lodash/isArray';

import { transformToList } from './../../../transformations/posts';
import {
    getDummyDataPosts
} from './../../../dummydata/posts';

import {
    // FETCH_POSTS,

    // DUMMY DATA
    FETCH_POSTS_DUMMY_DATA
} from './../../actionTypes/posts';


/**
 * LIST REDUCER
 */
const emptyInitialState = {

}

// variables for dummy data
let dummyDataSize = 25;
// let dummyData = default_complete_list_dummy_data;

const list = (state = emptyInitialState, action) => {
    switch (action.type) {

        case FETCH_POSTS_DUMMY_DATA: {

            let query = '';
            if(action && action.payload) {
                query = action.payload.query;
            }

            let currentDummyData = getDummyDataPosts(query);
            if(currentDummyData && isArray(currentDummyData)) {
                currentDummyData = transformToList(currentDummyData);
            }

            const page = 0;
            const howForPage = dummyDataSize * page;
            const hasNextPage = currentDummyData && isArray(currentDummyData) 
                && howForPage < currentDummyData.length ? true : false;

            const resultList = currentDummyData && isArray(currentDummyData) ?
                currentDummyData.slice(0, dummyDataSize) : [];

            const data = {
                totalSize: currentDummyData && isArray(currentDummyData) ?
                    currentDummyData.length : 0,
                page: 0,
                pageSize: dummyDataSize,
                result: resultList
            };

            return update(state, {
                isLoading: { $set: false },
                hasNextPage: { $set: hasNextPage },
                query: { $set: query },
                data: { $set: data }
            });
        }

        default: {
            return state;
        }
    }
}

export default list;

```

## Create a rootReducer

create a rootReducer that combine all your reducer and use it to include in the store

```javascript
import { combineReducers } from 'redux';
import posts from './posts';

const reducers = combineReducers({
    posts
});

const rootReducer = (state, action) => {
    return reducers(state, action);
}

export default rootReducer;
```

## Create a store

create a store to include reducers

```javascript
import { createStore } from "redux";
import rootReducer from './reducers';

const store = createStore(rootReducer, {});

export default store;
```

## Create selectors

for each entity create a selector

```javascript
export const isLoadingList = (state) => state && state.posts && state.posts.list ?
    state.posts.list.isLoading : false;
export const getItems = (state) => state && state.posts && state.posts.list && state.posts.list.data ?
    state.posts.list.data.result : [];
export const getTotalItems = (state) => state && state.posts && state.posts.list ?
    state.posts.list.totalItems : 0;
export const hasMoreItems = (state) => {
    const { result, totalItems } = state && state.posts && state.posts.list && state.posts.list.data ?
        state.posts.list.data : { result: [], totalItems: 0 };
    if(result) {
        return totalItems > result.length;
    }
    return false;
}
```

## Connect Redux to React app

For connect redux store to the app we use the Provider in the start point of the app, for example index.js or App.js

```javascript
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteRoutes from './Components/Sections/SiteRoutes';
import Header from './Components/Partials/Header';
import Footer from './Components/Partials/Footer';
import Container from 'react-bootstrap/Container';
import './App.css';

/**
 * Title of the site
 */
const siteName = 'Dummy Data Live OLD Redux experiment';

function App() {
  return (
    <Container className="App">
      <Header title={siteName} />
      <Router>
          <SiteRoutes />
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
```

## Use redux in the component throw HOC

We use a HOC (High Order Component) for inject redux data in our component (a child component of our HOC) so we convert data to props to pass at our child component. (the child component will be a *dumb component* just for show the data)

```javascript
import React, { useEffect, useCallback, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import PostList from './PostList';

// import redux actions
import { 
    fetchPosts,
    fetchMorePosts,
    createPost,
    clearPosts
} from './../../../services/actions/posts';

// import redux selectors
import { getItems, hasMoreItems, isLoadingList, getTotalItems } from './../../../services/selectors/posts';

// import urls for navigate posts
import { POSTS_URLS } from '../../../enums/posts';
import { PostPropType } from '../../../PropTypes/Post';

/**
 * Handle list of posts
 * 
 * @returns 
 */
const PostListPage = ({
    actions,
    list,
    details,
    isLoading,
    query
}) => {    
    const history = useHistory();
    const match = useRouteMatch();

    useEffect(() => {
        actions.fetchPosts({
            query: query
        });

        return function cleanup() {
            actions.clearPosts();
        }
    }, [actions, query]);

    useEffect(() => {
        if(details && details.id) {
            history.push(POSTS_URLS.READ.replace('{id}', details.id));
        }
    }, [details, history]);

    /**
     * Handle go to details
     */
    const handleDetails = useCallback((id) => {
      history.push(`${match.url}/${id}`);
    }, [history, match]);

    return (
        <Fragment>
            <PostList
                isLoading={isLoading}
                items={list}
                onDetails={handleDetails}
            />
        </Fragment>
    );
}

PostListPage.propTypes = {
    isLoading: PropTypes.bool,
    hasMore: PropTypes.bool,
    totalSize: PropTypes.number,
    items: PropTypes.arrayOf(PostPropType),
    actions: PropTypes.shape({
        fetchPosts: PropTypes.func
    })
};

PostListPage.defaultProps = {
}

const mapStateToProps = (state) => ({
    isLoading: isLoadingList(state),
    list: getItems(state),
    totalSize: getTotalItems(state),
    hasMore: hasMoreItems(state)
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        fetchPosts,
        fetchMorePosts,
        createPost,
        clearPosts
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListPage);

```

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
