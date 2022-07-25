import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: lightgrey;
    width: "375";
    height: "667";
    font-size: 1.125rem;
    font-family: sans-serif;
  }

  .form-Container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #f9e2ac;
    padding: 5px;
    margin: 5%;

  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;
