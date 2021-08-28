import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

import PostDetails from './PostDetails';

// import redux actions
import { 
    fetchPost,
 } from './../../../services/actions/posts';

// import redux selectors
import { getDetails, hasMoreItems, isLoadingDetails, getTotalItems } from './../../../services/selectors/posts';
import { PostPropType } from '../../../PropTypes/Post';

// // import urls for navigate posts
// import { POSTS_URLS } from '../../../enums/posts';

/**
 * Handle details of post
 * 
 * @returns 
 */
const PostDetailsPage = ({
    actions,
    details,
    isLoading
}) => {
    let { id } = useParams();

    useEffect(() => {
        actions.fetchPost({id});

        return function cleanup() {
            // actions.clearList();
        }
    }, [actions, id]);

    return (
        <Fragment>
            <PostDetails
                isLoading={isLoading}
                item={details}
            />
        </Fragment>
    );
}

PostDetailsPage.propTypes = {
    isLoading: PropTypes.bool,
    item: PostPropType,
    actions: PropTypes.shape({
        fetchPosts: PropTypes.func
    })
};

PostDetailsPage.defaultProps = {
}

const mapStateToProps = (state) => ({
    isLoading: isLoadingDetails(state),
    totalSize: getTotalItems(state),
    hasMore: hasMoreItems(state),
    details: getDetails(state)
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        fetchPost
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailsPage);
