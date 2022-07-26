import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  #h1 {
    color: #BA5370;
  }

  body {
    
    max-width: "375";
    max-height: "667";
    font-size: 1.125rem;
    font-family: sans-serif;
  }


  button,
  input,
  textarea {
    font: inherit;
  }
`

