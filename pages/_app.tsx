/* eslint-disable no-useless-escape */
/* eslint-disable no-irregular-whitespace */
import { AppProps } from 'next/dist/next-server/lib/router/router';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import { GlobalStyle } from 'utils/style_opt';
import * as Sentry from '@sentry/nextjs';
import Layout from 'components/Layout/Layout';
import PaymentProvider from 'hooks/provider/PaymentProvider';
import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

const tagManagerArgs = {
  gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID as string,
};

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    console.log(`       
                        =========       ==    ========    ========
    ＼＼＼＼＼             ||      \\\\      ||   ||           ||
    ＼＼＼∧_∧_            ||      ||      ||   ||           ||
    ＼|￣( ･ω∩)∩         ||======//       ||    ========   ||=======
    ＼|＼|￣( ^ω∧)∧       ||     \\\\       ||           ||   ||
    ＼◎＼|＼|￣(*･∀･）     ||      \\\\      ||           ||   ||
    ＼◎＼|＼/っｙっ＼       ||       \\\\     ||    =========    ========
    ＼◎＼|ニニニニ|
  　  ＼◎ 　　＼◎           W E L C O M E "R i S E" https://www.riseenm.com
  　    ＼　　　.＼
    `);
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
    <PaymentProvider>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </PaymentProvider>
  );
}

export default MyApp;
