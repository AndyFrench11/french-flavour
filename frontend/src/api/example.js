import { loadPostsSuccess, loadPostsRequest, loadPostsFailure } from '../actions/exampleActions';

export function loadPosts(userId) {
    // Interpreted by the thunk middleware:
    return function (dispatch, getState) {
      const { posts } = getState()
      if (posts[userId]) {
        // There is cached data! Don't do anything.
        return
      }
  
      dispatch(loadPostsRequest(userId))
  
      // Dispatch vanilla actions asynchronously
      fetch(`http://myapi.com/users/${userId}/posts`).then(
        response =>
          dispatch(loadPostsSuccess(userId, response)),
        error =>
          dispatch(loadPostsFailure(userId, error))
      )
    }
  }