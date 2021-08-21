import { AppProps } from 'next/dist/next-server/lib/router/router';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import { GlobalStyle } from 'utils/style_opt';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(process.env.NODE_ENV);
    } else {
      TagManager.initialize(tagManagerArgs);
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
