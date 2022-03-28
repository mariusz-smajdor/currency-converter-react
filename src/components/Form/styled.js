import styled from "styled-components"

export const Wrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${props => props.theme.space.big}px;
`

export const Title = styled.h1`
  color: ${props => props.theme.color.mainDetail};
  text-align: center;
`

export const Label = styled.label`
  display: flex;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoint.mobileMax}px) {
    flex-direction: column;
    align-items: unset;
    gap: ${props => props.theme.space.normal}px;
  }
`

export const LabelText = styled.span`
  flex-basis: 200px;

  @media(max-width: ${props => props.theme.breakpoint.mobileMax}px) {
    flex-basis: unset;
  }
`

export const Input = styled.input`
  flex-grow: 1;
  border-radius: 10px;
  border: 1px solid #bbb;
  padding: ${props => props.theme.space.normal}px;
`

export const Button = styled.button.attrs({
  type: "submit"
})`
  border: unset;
  background: ${props => props.theme.color.mainDetail};
  color: white;
  padding: ${props => props.theme.space.normal}px;
  border-radius: 10px;
  margin: ${props => props.theme.space.normal}px 0;
  transition: filter 1s;

  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }

  &:active {
    filter: brightness(110%);
  }
`

