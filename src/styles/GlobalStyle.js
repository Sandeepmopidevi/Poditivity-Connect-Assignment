import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 800px;
    margin: auto;
    padding: 1rem;
  }

  button {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    background-color: #007BFF;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default GlobalStyle;
