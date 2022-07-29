import styled from 'styled-components';

export const StyleHeader = styled.header`
  background-color: ${({theme}) => theme.colors.header};

  img {
    text-align: center;
  }

  h1 {
    color: black;
    text-align: center;
    font-size: medium;
  }

  h2 {
    color: black;
    text-align: center;
    font-size: small;
  }

  &:hover {
    background-color: 'black';
  }
`;
