import posts from './posts'
import postDetail from './postDetail'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  posts,
  postDetail,
})

export default rootReducer
