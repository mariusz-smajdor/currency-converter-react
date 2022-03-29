import styled, { css } from "styled-components"

export const InfoPar = styled.p`
  font-size: 0.9rem;
  margin: 0;
  
  ${props => props.styledResult && css`
    font-size: 1.5rem;
    color: ${props => props.theme.color.mainDetail};
    text-align: center;
  `}
`

