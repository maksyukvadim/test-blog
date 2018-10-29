const COMMENTS = 'comments'
export const getComments = () => JSON.parse(localStorage.getItem(COMMENTS))

export const setComment = (comment, postId) => {
  let comments = getComments(COMMENTS)
  if (!comments) {
    comments = {}
  }
  if (comments.hasOwnProperty(postId)) {
    comments[postId].push(comment)
  } else {
    comments[postId] = [comment]
  }
  localStorage.setItem(COMMENTS, JSON.stringify(comments))
  return comments
}
