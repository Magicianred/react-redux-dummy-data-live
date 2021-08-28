import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import isArray from 'lodash/isArray';
import noop from 'lodash/noop';
import { Link } from 'react-router-dom';

import { PostPropType } from '../../../../PropTypes/Post';

const PostList = ({
    isLoading,
    items,
    onDetails
}) => {
    return (
        <Fragment>
            {isLoading && (<div>isLoading...</div>)}
            {!isLoading && items && isArray(items) ? 
                items.map((item, index) => (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <Link to={`/blog/${item.id}`}>Go to details</Link>
                        <button onClick={() => onDetails(item.id)}>Go to details</button>
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