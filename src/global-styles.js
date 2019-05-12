import { injectGlobal } from 'styled-components';


export const MAX_WIDTH = 600;



/* eslint no-unused-expressions: 0 */
injectGlobal`

    html {
        box-sizing: border-box;
        height: 100%;
        line-height: 1;
        cursor: default;
        font-size: 16px;
    }

    body,
    button,
    input,
    textarea,
    select {
        font-family: 'Lato', sans-serif;
    }

    html * {
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-drag: none;
        text-size-adjust: none;
    }

    p {
        line-height: 1.5;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    button,
    p,
    ol,
    ul,
    li {
        margin: 0;
        padding: 0;
    }

    :before,
    :after {
        box-sizing: content-box;
    }
    
    div {
        box-sizing: border-box;
    }
    
    :root {
        --brand-blue: #0092D0;
        --brand-gold: #FDBE43;
        --brand-orange: #FF7500;
        
        --brand-red: red;
        --brand-green: green;
        
        --brand-darkest-grey: #343537;
        --brand-darker-grey: #55585D;
        --brand-dark-grey: #7C8087;
        --brand-grey: #B4B8BE;
        --brand-light-grey: #CDD0D4;
        --brand-lighter-grey: #DDE0E3;
        --brand-lightest-grey: #F5F5F5;
        
        
        --brand-primary: --brand-blue;
        --brand-secondary: --brand-gold;
        --brand-tertiary: --brand-orange;
    }

`;
