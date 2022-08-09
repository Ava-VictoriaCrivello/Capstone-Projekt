import styled from 'styled-components';

export const FormStyles = styled.form`
  max-width: '375';
  max-height: '667';
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
    color: #fff;
    width: 200px;

    text-transform: capitalize;
    padding: 16px;
    border: none;

    outline: none;
    background: linear-gradient(90deg, rgba(226, 161, 161) 0%, rgba(187, 129, 129) 100%);
  }
`;
