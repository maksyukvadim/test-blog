import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  & {
    position: relative;

    display: block;
    margin: 30px auto;
    padding: 0;

    overflow: hidden;

    border-width: 0;
    outline: none;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

    background-color: #2ecc71;
    color: #ecf0f1;

    transition: background-color 0.3s;
    cursor: pointer;
  }

  &:hover,
  &:focus {
    background-color: #27ae60;
  }

  & > * {
    position: relative;
  }

  & span {
    display: block;
    padding: 12px 24px;
    font-weight: bold;
  }

  &:before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;
    width: 0;
    padding-top: 0;

    border-radius: 100%;

    background-color: rgba(236, 240, 241, 0.3);

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  &:active:before {
    width: 120%;
    padding-top: 120%;

    transition: width 0.2s ease-out, padding-top 0.2s ease-out;
  }

  & > *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  &.orange {
    background-color: #e67e22;
  }

  &.orange:hover,
  .btn.orange:focus {
    background-color: #d35400;
  }

  &.red {
    background-color: #e74c3c;
  }

  &.red:hover,
  &.red:focus {
    background-color: #c0392b;
  }

  &.blue {
    background-color: #03a9f4;
  }

  &.blue:hover,
  &.blue:focus {
    background-color: #359bca;
  }
`

const Button = ({ children, click, color = 'red' }) => (
  <Btn onClick={click} className={color} type="button">
    <span>{children}</span>
  </Btn>
)

export default Button
