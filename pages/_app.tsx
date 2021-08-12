import { AppProps } from 'next/dist/next-server/lib/router/router';
import { GlobalStyle } from 'utils/style_opt';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
    process.env.NODE_ENV === 'development' && console.log(process.env.NODE_ENV);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
