import React from 'react'
import styled from 'styled-components'
import { compose, withHandlers } from 'recompose'
import Input from '../input/Input'

const Wrap = styled.div`
  box-sizing: border-box;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`

const Search = ({ onChange }) => {
  const propInp = {
    type: 'text',
    onChange,
    required: true,
  }
  return (
    <Wrap>
      <Input propInp={propInp} label={'Search'} />
    </Wrap>
  )
}

const enhance = compose(
  withHandlers({
    onChange: props => event => {
      props.setQuerySearch(event.target.value)
    },
  })
)

export default enhance(Search)
