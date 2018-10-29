import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  background: #fff9f9;
  position: relative;
  padding: 10px;
  margin: 10px 0;
`

const First = styled.div`
  &: first-letter {
    text-transform: uppercase;
  }
`

const Title = styled(First)`
  font-weight: bold;
`

const Body = styled(First)``

const Email = styled.div`
  position: absolute;
  right: 10px;
  top: 5px;
  color: blue;
`

const Comment = ({ body, email, name }) => (
  <Wrap>
    <Title>{name}</Title>
    <Body>{body}</Body>
    <Email>{email}</Email>
  </Wrap>
)

export default Comment
