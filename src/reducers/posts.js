import { POSTS } from '../actions'
import { REQUEST, SUCCESS, FAILURE } from '../constants'
const initialState = {
  posts: [],
  isLoadingPosts: false,
  querySearch: '',
}

function posts(state = initialState, action) {
  switch (action.type) {
    case POSTS[REQUEST]: {
      return { ...state, isLoadingPosts: action.payload.isLoading }
    }
    case POSTS[SUCCESS]: {
      return {
        ...state,
        posts: action.payload.response,
        isLoadingPosts: action.payload.isLoading,
      }
    }
    case POSTS[FAILURE]: {
      return { ...state, isLoadingPosts: action.payload.isLoading }
    }
    case 'SET_QUERY_SEARCH': {
      return { ...state, querySearch: action.payload.query }
    }
    default: {
      return state
    }
  }
}

export default posts
