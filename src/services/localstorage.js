const COMMENTS = 'comments'
export const getComments = () => {
   let comments = JSON.parse(localStorage.getItem(COMMENTS))
    if(!comments) comments = {};
    return comments
}

export const setComment = (comment, postId) => {
  let comments = getComments(COMMENTS)

  if (comments.hasOwnProperty(postId)) {
    comments[postId].push(comment)
  } else {
    comments[postId] = [comment]
  }
  localStorage.setItem(COMMENTS, JSON.stringify(comments))
  return comments
}
