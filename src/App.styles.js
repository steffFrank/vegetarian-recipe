import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   body {
    --primary-color: #bc6c25;
    --bg-color: #fefae0;
    --secondary-color: #dda15e;
    --green-clr: #283618;
    --green-clr-light: #606c38;

    background-color: var(--bg-color);
    padding: 0 20px;
    font-family: 'Lato', sans-serif;
    max-width: 1440px;
    margin: auto;
   }

   h1, h2, h3, h4 {
    font-family: 'Playfair Display', serif;
   }
   
   a {
    text-decoration: none;
   }

   li {
      text-transform: capitalize;
   }
`