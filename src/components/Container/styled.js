import styled from "styled-components"

export const Wrapper = styled.main`
  flex-basis: 700px;
  padding: ${props => props.theme.space.big * 2}px;
  box-shadow: 0 4px 8px #777;
  border-radius: ${props => props.theme.space.big}px;
  margin: 0 auto ${props => props.theme.space.big}px;
  background: white;
`