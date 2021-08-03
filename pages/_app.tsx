import { AppProps } from 'next/dist/next-server/lib/router/router';
import { GlobalStyle } from 'utils/style_opt';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
