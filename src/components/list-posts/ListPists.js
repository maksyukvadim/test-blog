import React from 'react'
import styled from 'styled-components'
import { withHandlers, compose } from 'recompose'

import Post from '../post/Post'

const WrapList = styled.div`
`

export const ListPosts = ({ posts, openPost }) => (
  <WrapList>
    {posts.map(post => (
      <Post key={post.id} openPost={openPost} {...post} />
    ))}
  </WrapList>
)

const enhance = compose(
  withHandlers({
    openPost: prop => id => {
      prop.history.push(`/post/${id}`)
    },
  })
)

export default enhance(ListPosts)
