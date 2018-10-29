import { USER, COMMENTS, POST_DETAIL } from '../actions'
import { REQUEST, SUCCESS, FAILURE, SET_MY_COMMENTS } from '../constants'
const initialState = {
  comments: [],
  myComments: {},
  postDetail,
  user: null,
  isLoadingComments: false,
  isLoadingUser: false,
  isLoadingPostDetail: false,
}

function postDetail(state = initialState, action) {
  switch (action.type) {
    case POST_DETAIL[REQUEST]: {
      return { ...state, isLoadingPostDetail: action.payload.isLoading }
    }
    case POST_DETAIL[SUCCESS]: {
      return {
        ...state,
        postDetail: action.payload.response,
        isLoadingPostDetail: action.payload.isLoading,
      }
    }
    case POST_DETAIL[FAILURE]: {
      return { ...state, isLoadingPostDetail: action.payload.isLoading }
    }
    case USER[REQUEST]: {
      return { ...state, isLoadingUser: action.payload.isLoading }
    }
    case USER[SUCCESS]: {
      return {
        ...state,
        user: action.payload.response,
        isLoadingUser: action.payload.isLoading,
      }
    }
    case USER[FAILURE]: {
      return { ...state, isLoadingPosts: action.payload.isLoading }
    }
    case COMMENTS[REQUEST]: {
      return { ...state, isLoadingComments: action.payload.isLoading }
    }
    case COMMENTS[SUCCESS]: {
      return {
        ...state,
        comments: action.payload.response,
        isLoadingComments: action.payload.isLoading,
      }
    }
    case COMMENTS[FAILURE]: {
      return { ...state, isLoadingComments: action.payload.isLoading }
    }

    case SET_MY_COMMENTS: {
      return { ...state, myComments: action.payload.myComments }
    }
    default: {
      return state
    }
  }
}

export default postDetail
