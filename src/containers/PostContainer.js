import React from 'react'
import { connect } from 'react-redux'
import { compose, lifecycle } from 'recompose'
import { getPostsDetail, initMyComments } from '../actions'

import CommentsContainer from './CommentsContainer'

import PostDetail from '../components/post-detail/PostDetail'
import UserInfo from '../components/user-info/UserInfo'

import withLoading from '../hocs/withLoadingHoc'

const UserInfoLoading = withLoading(UserInfo)
const CommentsContainerLoading = withLoading(CommentsContainer)
const PostDetailLoading = withLoading(PostDetail)

const PostContainer = ({
  postDetail,
  user,
  comments,
  isLoadingComments,
  isLoadingUser,
  isLoadingPostDetail,
}) => (
  <React.Fragment>
    <PostDetailLoading detail={postDetail} isLoading={isLoadingPostDetail} />
    <UserInfoLoading isLoading={isLoadingUser || !user} user={user} />
    <CommentsContainerLoading isLoading={isLoadingComments} />
  </React.Fragment>
)

const mapState = ({ postDetail }) => ({
  ...postDetail,
})

const mapDispatch = dispatch => ({
  getPostsDetail: id => dispatch(getPostsDetail(id)),
  initMyComments: () => dispatch(initMyComments()),
})

const enhance = compose(
  connect(
    mapState,
    mapDispatch
  ),
  lifecycle({
    componentDidMount() {
      const { match } = this.props
      this.props.getPostsDetail(match.params.id)
      this.props.initMyComments()
    },
  })
)

export default enhance(PostContainer)
