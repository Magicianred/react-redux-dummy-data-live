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
