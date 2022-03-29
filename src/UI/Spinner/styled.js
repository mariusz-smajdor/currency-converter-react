import styled, { keyframes } from "styled-components"

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;

  &:after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: ${props => props.theme.space.normal}px;
    border-radius: 50%;
    border: 6px solid teal;
    border-color: ${props => props.theme.color.mainDetail} transparent;
    animation: ${spinner} 1.2s linear infinite;
  }
`