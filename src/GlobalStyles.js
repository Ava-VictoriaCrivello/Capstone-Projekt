import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
    
  }
  body {
    background-color: whitesmoke;
    max-width: "375";
    max-height: "667";
    font-size: 1.125rem;
    font-family: sans-serif;
  }

  *h1 { 
    color: blue;
  }


  button,
  input,
  textarea {
    font: inherit;
  }
`

