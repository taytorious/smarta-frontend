import { injectGlobal, css } from 'styled-components';
import { normalize } from 'polished';
import { getAssetURL } from './utils/assetUtils';


export const MAX_WIDTH = 600;

const fontsUrlBase = getAssetURL('exp-fonts');
const getFontResources = (font) => css`
    src: url('${fontsUrlBase}/${font}.woff2') format('woff2'),
        url('${fontsUrlBase}/${font}.woff') format('woff'),
        url('${fontsUrlBase}/${font}.ttf') format('opentype'),
        url('${fontsUrlBase}/${font}.eot') format('eot');
`;

const loadProximaNova = () => css`
    @font-face {
        font-weight: 100;
        font-family: 'Proxima Nova';
        ${getFontResources('ProximaNova-Regular')};
        font-style: regular;
    }

    @font-face {
        font-weight: 400;
        font-family: 'Proxima Nova';
        ${getFontResources('ProximaNova-Regular')};
        font-style: regular;
    }

    @font-face {
        font-weight: 700;
        font-family: 'Proxima Nova';
        ${getFontResources('ProximaNova-Bold')};
        font-style: regular;
    }

    @font-face {
        font-weight: 800;
        font-family: 'Proxima Nova';
        ${getFontResources('ProximaNova-Bold')};
        font-style: regular;
    }
`;

const getNonMobileStyles = () => css`
    :root {
        --background-color: #dedede;

        @media (min-width: 600px) and (max-height: 1000px) {
            font-size: 16px;
            transform: scale(0.9);
        }

        @media (min-width: 600px) and (max-height: 800px) {
            font-size: 18px;
            transform: scale(0.75);
        }

        @media (min-width: 600px) and (max-height: 700px) {
            font-size: 18px;
            transform: scale(0.65);
        }

        @media (min-width: 600px) and (min-height: 700px) {
            --max-container-width: 466px;
        }
    }

    #app {
        background: var(--background-color);
    }
`;

/* eslint no-unused-expressions: 0 */
injectGlobal`
    /* stylelint-disable value-keyword-case, max-empty-lines */
    ${normalize(true)};
    ${loadProximaNova()};
    /* stylelint-enable value-keyword-case, max-empty-lines */

    html {
        box-sizing: border-box;
        height: 100%;
        line-height: 1;
        cursor: default;
    }

    body,
    button,
    input,
    textarea,
    select {
        font-family: 'Proxima Nova', sans-serif;
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

`;
