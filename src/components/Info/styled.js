import styled, { css } from "styled-components"


export const Wrapper = styled.section`
  margin-top: ${props => props.theme.space.big}px;
`

export const InfoPar = styled.p`
  font-size: 0.9rem;
  
  ${props => props.styledResult && css`
    font-size: 1.5rem;
    color: ${props => props.theme.color.mainDetail};
    text-align: center;
  `}
`

