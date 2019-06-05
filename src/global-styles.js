import { createGlobalStyle } from 'styled-components';
import {brand_darkest_grey} from "./utils/colors";


export const MAX_WIDTH = 600;



/* eslint no-unused-expressions: 0 */
const Global = createGlobalStyle`

    
    html {
        box-sizing: border-box;
        height: 100%;
        line-height: 1;
        cursor: default;
        font-size: 16px;
        color: var(--brand-darkest-grey);
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
    
    a {
      color: ${brand_darkest_grey};
      text-decoration: none;
      
      &:hover, &:visited {
        color: ${brand_darkest_grey};
        text-decoration: none;
      }
    }
   

`;

export default Global;
