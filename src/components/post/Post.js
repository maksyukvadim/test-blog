import React from 'react'
import styled from 'styled-components'
import { withHandlers, compose } from 'recompose'

const Wrap = styled.div`
  width: 100%;
  height: 70px;
  padding: 5px 20px;
  margin-top: 20px;
  cursor: pointer;
  
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

const Title = styled.h3`
    margin: 0;
    text-align: center;
    &:first-letter {
        text-transform: uppercase;
    }
`

const Description = styled.div`
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    &:first-letter {
        text-transform: uppercase;
    }
`

const Post = ({ title, body, openPost }) => (
  <Wrap onClick={openPost}>
    <Title>{title}</Title>
    <Description>{body}</Description>
  </Wrap>
)

const enhance = compose(
    withHandlers({
        openPost: (props) => () => {
            props.openPost(props.id)
        }
    })
)

export default enhance(Post);
