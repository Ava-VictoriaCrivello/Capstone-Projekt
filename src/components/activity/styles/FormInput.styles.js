import styled from 'styled-components';

export const FormStyles = styled.form`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 8px 8px rgba(102, 102, 102, 0.05);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;

  label {
    text-align: left;
    display: block;
  }

  input {
    width: 200px;
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }

  button {
    background: salmon;
    color: #fff;
    border: 0;
    border-radius: 8px;
    width: 200px;
    padding: 6px 10px;
    margin: 10px 0;
  }
`;
