/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="kr">
        <Head>
          <meta name="author" content="Believer" />
          <meta
            name="facebook-domain-verification"
            content="yjg5pl42821he9rt3davch7x6lp397"
          />
          <meta
            name="naver-site-verification"
            content="ceeafc0e07aeadba359eb22c54762497e3549ffd"
          />
          <meta
            name="naver-site-verification"
            content="ff84287595c33449e0f753823ab4394f5eca9647"
          />
          <meta name="theme-color" content="#222" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />

          {/* 폰트 */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
