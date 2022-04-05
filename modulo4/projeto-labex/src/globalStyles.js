import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');

    :root {
        --main-color: white;
    }

    body {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
    }

    button {
        font-family: 'Inter', sans-serif;
        cursor: pointer;
    }

`

export default GlobalStyle