import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600&family=Hubballi&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ruda:wght@400;700;800&display=swap');

    :root {
        --main-color: #121212 /*#5118b3*/;
        --secondary-color: #1a1a1a;
        --background-color: #242424;
        --white: #b9b9b9;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: 'Fredoka', sans-serif;
        background-color: var(--secondary-color);
    }

    button {
        cursor: pointer;
        font-family: 'Fredoka', sans-serif;
    }
`

export default GlobalStyle