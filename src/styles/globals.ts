import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --blue-100 : #3b7ebe;
  --blue-300 : #78B5F0;
  --white-100: #fff;
  --gray-100: #f1f1f1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body, input, button {
  font-family: 'Roboto', sans-serif;
}

`;
