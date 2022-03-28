import { createGlobalStyle } from "styled-components"
import background from "./images/money-background.jpg"

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    font-family: "Montserrat", sans-serif;
    color: ${props => props.theme.color.mainText};
    background: url("${background}");
    background-position: center;
    background-size: cover;
    height: 100vh;
    padding: ${props => props.theme.space.big}px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`