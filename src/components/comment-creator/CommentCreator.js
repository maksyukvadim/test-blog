import React from 'react'
import styled from 'styled-components'
import Input from '../input/Input'

const Wrap = styled.div``
const Title = styled.h3`
  text-align: center;
`

const CommentCreator = ({
  onChangeName,
  onChangeBody,
  onChangeEmail,
  children,
  newComment,
}) => {
  const propInp = {
    type: 'text',
    required: true,
  }
  return (
    <Wrap>
      <Title>Add comment</Title>
      <Input
        propInp={{ ...propInp, onChange: onChangeName, value: newComment.name }}
        label="Name"
        width="100%"
      />
      <Input
        propInp={{ ...propInp, onChange: onChangeBody, value: newComment.body }}
        label="Description"
        width="100%"
      />
      <Input
        propInp={{
          ...propInp,
          onChange: onChangeEmail,
          value: newComment.email,
        }}
        label="Email"
        width="100%"
      />
      {children}
    </Wrap>
  )
}

export default CommentCreator
