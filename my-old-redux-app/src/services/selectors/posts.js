/**
 * Posts list selectors
 */
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


/**
 * Post details selectors
 */
export const isLoadingDetails = (state) => state && state.posts && state.posts.details ?
    state.posts.details.isLoading : false;
export const getDetails = (state) => state && state.posts && state.posts.details ?
    state.posts.details.data : {};