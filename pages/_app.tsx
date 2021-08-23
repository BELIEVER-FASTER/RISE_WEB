import { AppProps } from 'next/dist/next-server/lib/router/router';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import { GlobalStyle } from 'utils/style_opt';
import * as Sentry from '@sentry/nextjs';
import TransitionLayout from 'components/Layout/TransitionLayout';
import Layout from 'components/Layout/Layout';

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log(process.env.NODE_ENV);
      Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        tracesSampleRate: 1,
        environment: 'development',
      });
    } else {
      TagManager.initialize(tagManagerArgs);
      Sentry.init({
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
        tracesSampleRate: 1.0,
        environment: 'production',
      });
    }
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
      <GlobalStyle />
    </Layout>
  );
}

export default MyApp;
