import { AppProps } from 'next/dist/next-server/lib/router/router';
import { GlobalStyle } from 'utils/globalStyle';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
