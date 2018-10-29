import React from 'react'
import { connect } from 'react-redux'
import { compose, withProps, withHandlers, withState } from 'recompose'

import { setNewComment } from '../actions'

import Comment from '../components/comment/Comment'
import CommentCreator from '../components/comment-creator/CommentCreator'
import Button from '../components/button/Button'

import { TEMP_DATA_COMMENT } from '../constants'

const CommentsContainer = ({
  comments,
  onChange,
  onSaveComment,
  clearNewComment,
  newComment,
}) => {
  const onChangeName = onChange('name')
  const onChangeEmail = onChange('email')
  const onChangeBody = onChange('body')
  const saveWithClear = () => {
    onSaveComment()
    clearNewComment()
  }
  return (
    <React.Fragment>
      {comments.map(comment => (
        <Comment key={comment.id} {...comment} />
      ))}
      <CommentCreator
        newComment={newComment}
        onChangeName={onChangeName}
        onChangeEmail={onChangeEmail}
        onChangeBody={onChangeBody}
      >
        <Button click={saveWithClear} color={'blue'}>
          Add Comment
        </Button>
      </CommentCreator>
    </React.Fragment>
  )
}

const mapState = ({ postDetail }) => ({
  ...postDetail,
})

const dispatchState = dispatch => ({
  onSetNewComment: (comment, postId) =>
    dispatch(setNewComment(comment, postId)),
})

const enhance = compose(
  connect(
    mapState,
    dispatchState
  ),
  withProps(prop => ({
    ...prop,
    comments: prop.comments[0]
      ? [...prop.comments, ...(prop.myComments[prop.comments[0].postId] || [])]
      : prop.comments,
  })),
  withState('newComment', 'setNewComment', { ...TEMP_DATA_COMMENT }),
  withHandlers({
    onChange: ({ setNewComment, newComment }) => type => e =>
      setNewComment({ ...newComment, [type]: e.target.value }),
    clearNewComment: ({ setNewComment }) => () => {
      setNewComment({ ...TEMP_DATA_COMMENT })
    },
    onSaveComment: ({ newComment, comments, onSetNewComment }) => e => {
      onSetNewComment({ ...newComment, id: +new Date() }, comments[0].postId)
    },
  })
)

export default enhance(CommentsContainer)
