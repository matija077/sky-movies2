import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        line-height: 1.6;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 62.5%;
    }
    *, *:before, *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    body {

        font-family: Lato, Open-Sans, Helvetica, Sans-Serif;
    }
    h1, h2, h3, h4, h5 {
        font-weight: 100;
        line-height: 1.2;
    }
`;

export default GlobalStyle;