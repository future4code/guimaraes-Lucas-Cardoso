import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    background-color: lightgray;
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#reset {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    margin: 10px;
    cursor: pointer;
}
`

export default GlobalStyle