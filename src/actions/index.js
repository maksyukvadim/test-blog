import {
  REQUEST,
  SUCCESS,
  FAILURE,
  SET_QUERY_SEARCH,
  FETCHED_POSTS_DETAIL,
  FETCHED_POSTS,
  NEW_COMMENT,
  SET_MY_COMMENTS,
  INIT_MY_COMMENTS
} from '../constants'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

function action(type, payload) {
  return { type, payload }
}

export const POSTS = createRequestTypes('POSTS')
export const POST_DETAIL = createRequestTypes('POST_DETAIL')
export const USER = createRequestTypes('USER')
export const COMMENTS = createRequestTypes('COMMENTS')

export const posts = {
  request: isLoading => action(POSTS[REQUEST], { isLoading }),
  success: (isLoading, response) =>
    action(POSTS[SUCCESS], { isLoading, response }),
  failure: (isLoading, error) => action(POSTS[FAILURE], { isLoading, error }),
}

export const postDetail = {
  request: isLoading => action(POST_DETAIL[REQUEST], { isLoading }),
  success: (isLoading, response) =>
    action(POST_DETAIL[SUCCESS], { isLoading, response }),
  failure: (isLoading, error) =>
    action(POST_DETAIL[FAILURE], { isLoading, error }),
}

export const user = {
  request: isLoading => action(USER[REQUEST], { isLoading }),
  success: (isLoading, response) =>
    action(USER[SUCCESS], { isLoading, response }),
  failure: (isLoading, error) => action(USER[FAILURE], { isLoading, error }),
}

export const comments = {
  request: isLoading => action(COMMENTS[REQUEST], { isLoading }),
  success: (isLoading, response) =>
    action(COMMENTS[SUCCESS], { isLoading, response }),
  failure: (isLoading, error) =>
    action(COMMENTS[FAILURE], { isLoading, error }),
}

export const getPosts = () => action(FETCHED_POSTS)
export const getPostsDetail = id => action(FETCHED_POSTS_DETAIL, { id })
export const setQuerySearch = query => ({
  type: SET_QUERY_SEARCH,
  payload: { query },
})

export const setNewComment = (comment, postId) => ({
  type: NEW_COMMENT,
  payload: { comment, postId },
})

export const setMyComments = (myComments) => ({
    type: SET_MY_COMMENTS,
    payload: { myComments },
})

export const initMyComments = () => ({
    type: INIT_MY_COMMENTS
})
