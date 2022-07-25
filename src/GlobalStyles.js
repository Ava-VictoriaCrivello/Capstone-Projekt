import {createGlobalStyle} from 'styled-components';

// Trick prettier into formatting "createGlobalStyle"
const styled = {createGlobalStyle};

export default styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    display: grid;
    grid-template-columns:auto;
    justify-content: space-evenly;
    grid-template-rows: auto;
    margin: 0;
    padding: 0;
    background-color: lightgrey;
    width: "375";
    height: "667";
    font-size: 1.125rem;
    font-family: sans-serif;
  }

  .formContainer {
    display: flex;
    flex-direction: column;
    align-items: start;
    border-color: black;
    border-bottom: 10px;
    padding: 40px;
    width: 100%;
    margin: 10px;
    background-color: grey;
  }
  
  .input-Activity {
    
  }

  .input-startTime {
    
  }

  .input-endTime {
    
  }

  .submit--button-form {
    
  }

  .input-time--Form {
    display: flex;
  }

  button,
  input,
  textarea {
    font: inherit;
  }
`;

//TODO http://getbem.com/introduction/