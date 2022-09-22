import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --light-gray: #EFEFEF;
    --gray: #333333;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
}

select, button {
    font-family: 'Montserrat', sans-serif;
}

`

export default GlobalStyle