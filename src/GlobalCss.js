import { createGlobalStyle } from 'styled-components'
import normalize from 'styled-normalize'

export default createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Open Sans', sans-serif;

  }

  button {
    outline: none;
    cursor: pointer;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: 'Lora', serif;
    margin: 0;
  }
  textarea, input {
    outline: none;
    transition: border-color .3s;
    &:focus {
      border-color: ${({ theme }) => theme.colors.positive};
    }
  }

`
