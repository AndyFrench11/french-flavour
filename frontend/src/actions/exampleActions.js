export function loadPostsSuccess(userId, response) {
    return {
      type: 'LOAD_POSTS_SUCCESS',
      userId,
      response
    }
  }
  
  export function loadPostsFailure(userId, error) {
    return {
      type: 'LOAD_POSTS_FAILURE',
      userId,
      error
    }
  }
  
  export function loadPostsRequest(userId) {
    return {
      type: 'LOAD_POSTS_REQUEST',
      userId
    }
  }