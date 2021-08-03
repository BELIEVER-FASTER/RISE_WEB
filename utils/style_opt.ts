import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: 'Pretendard', sans-serif;
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
`;

export const responSiveSize = {
  mobile: '(max-width: 770px)',
  tablet: '1024px',
  desktop: '1700px',
};
