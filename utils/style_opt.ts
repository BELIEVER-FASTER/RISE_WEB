import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
    * {
        box-sizing: border-box;
    }
    body {
        background-color: #fff;
        overflow-x: hidden;
        position:relative;
        font-family: 'Pretendard','Apple SD Gothic Neo', sans-serif;
        transition: background 0.3s;
    }
    .client_nh{
        transition: all 0.5s;
    }
    @font-face{
        font-family: 'NHaasGroteskTXPro';
        src:url('/font/NHaasGroteskTXPro-55Rg.woff') format('woff');
        font-weight:400;
    }
    @font-face{
        font-family: 'NHaasGroteskTXPro';
        src:url('/font/NHaasGroteskTXPro-65Md.woff') format('woff');
        font-weight:500;
    }
    @font-face{
        font-family: 'NHaasGroteskTXPro';
        src:url('/font/NHaasGroteskTXPro-75Bd.woff') format('woff');
        font-weight:600;
    }
    @font-face{
        font-family: 'Ivy Mode';
        src:url('/font/IvyMode-Italic.woff') format('woff');
        font-weight: normal;
        font-style: italic;
    }
    @font-face {
        font-family: 'Ivy Mode';
        src: url('/font/IvyMode-LightItalic.woff') format('woff');
        font-weight: 300;
        font-style: italic;
    }
    .invinsible{
        opacity: 0;
    }
`;

export const responSiveSize = {
  mobile: '(max-width: 950px)',
  tablet: '(max-width: 1440px)',
  desktop: '1700px',
};
