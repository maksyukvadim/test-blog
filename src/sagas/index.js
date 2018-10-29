import { take, put, call, fork, all, takeEvery } from 'redux-saga/effects'
import { posts, postDetail, user, comments, setMyComments } from '../actions'
import { api, localstor } from '../services'
import {
  FETCHED_POSTS_DETAIL,
  FETCHED_POSTS,
  INIT_MY_COMMENTS,
} from '../constants'

function* fetchEntity(entity, apiFn, id) {
  yield put(entity.request(true))
  const { data, error } = yield call(apiFn, id)
  if (data) yield put(entity.success(false, data))
  else yield put(entity.failure(false, error))
}

export const fetchPosts = fetchEntity.bind(null, posts, api.getPosts)
export const fetchPostDetail = fetchEntity.bind(
  null,
  postDetail,
  api.getPostDetail
)
export const fetchUser = fetchEntity.bind(null, user, api.getUser)
export const fetchComments = fetchEntity.bind(
  null,
  comments,
  api.getCommentsByPost
)

function* initComments() {
  const myComments = localstor.getComments()
  yield put(setMyComments(myComments))
}

function* watchFetchPosts() {
  yield takeEvery(FETCHED_POSTS, fetchPosts)
}

function* watchFetchPostDetail() {
  const { payload } = yield take(FETCHED_POSTS_DETAIL)
  yield fork(fetchPostDetail, payload.id)
  const action = yield take('POST_DETAIL_SUCCESS')
  yield all([
    call(fetchUser, action.payload.response.userId),
    call(fetchComments, payload.id),
  ])
}

function* watchAddComments() {
  const { payload } = yield take('NEW_COMMENT')
  const myComments = localstor.setComment(payload.comment, payload.postId)
  yield put(setMyComments(myComments))
}

function* watchInitMyComments() {
  yield takeEvery(INIT_MY_COMMENTS, initComments)
}

export default function* root() {
  yield all([
    fork(watchFetchPosts),
    fork(watchFetchPostDetail),
    fork(watchAddComments),
    fork(watchInitMyComments),
  ])
}
