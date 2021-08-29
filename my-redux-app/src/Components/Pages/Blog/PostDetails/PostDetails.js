import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { PostPropType } from './../../../../PropTypes/Post'

const PostDetails = ({
    isLoading,
    item
}) => {
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