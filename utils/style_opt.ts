import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        overflow-x: hidden;
        position:relative;
        font-family: 'Pretendard','Apple SD Gothic Neo', sans-serif;
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
    .invinsible{
        opacity: 0;
    }
`;

export const responSiveSize = {
  mobile: '(max-width: 950px)',
  tablet: '(max-width: 1440px)',
  desktop: '1700px',
};
