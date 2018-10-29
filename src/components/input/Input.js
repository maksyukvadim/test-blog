import React from 'react'
import styled from 'styled-components'

const Inpu = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: ${({ width }) => width};
  border: none;
  border-bottom: 1px solid #757575;
  padding: 10px 0;

  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #5264ae;
  }

  &:focus ~ .bar:before,
  &:focus ~ .bar:after {
    width: 50%;
  }

  &:focus ~ .highlight {
    -webkit-animation: inputHighlighter 0.3s ease;
    -moz-animation: inputHighlighter 0.3s ease;
    animation: inputHighlighter 0.3s ease;
  }

  @-webkit-keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @-moz-keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
  @keyframes inputHighlighter {
    from {
      background: #5264ae;
    }
    to {
      width: 0;
      background: transparent;
    }
  }
`

const Bar = styled.span`
  position: relative;
  display: block;
  width: ${({ width }) => width};
  &:before,
  &:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: #5264ae;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  &:before {
    left: 50%;
  }
  &:after {
    right: 50%;
  }
`

const Group = styled.div`
  position: relative;
  margin-bottom: 45px;
`

const Highlight = styled.span`
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
`

const Label = styled.label`
  color: #999;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`

const Input = ({ propInp, label = 'Label', width = '500px' }) => (
    <Group>
        <Inpu {...propInp} width={width} />
        <Highlight className="highlight" />
        <Bar className="bar" width={width} />
        <Label>{label}</Label>
    </Group>
)

export default Input
