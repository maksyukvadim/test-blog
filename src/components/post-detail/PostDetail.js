import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div``

const Title = styled.h2`
  text-align: center;
`
const Body = styled.div`
  padding-left: 25px;
`

const PostDetail = ({ detail }) => (
  <Wrap>
    <Title>{detail.title}</Title>
    <Body>{detail.body}</Body>
  </Wrap>
)

export default PostDetail
