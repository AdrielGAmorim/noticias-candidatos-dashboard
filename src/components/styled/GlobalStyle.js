import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Ubuntu', sans-serif;
        background-color: #F9F9F9;
        color: rgba(0, 0, 0, .8);
    }
`