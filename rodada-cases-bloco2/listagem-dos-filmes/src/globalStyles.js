import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --darker: #111111;
        --dark: #202020;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }

    input, button {
        font-family: 'Montserrat', sans-serif;
        border: none;
    }

    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
        padding: 0;
    }
`

export default GlobalStyle