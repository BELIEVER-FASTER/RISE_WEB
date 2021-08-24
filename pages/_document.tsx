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
          <meta name="description" content="rise_web" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="RISE" />
          <meta property="og:title" content="라이즈 | 패션&코스메틱 라이브 쇼핑 MCN" />
          <meta
            property="og:description"
            content="패션&코스메틱 전문 쇼핑 호스트 + 크리에이터와 함께하는 라이브 쇼핑의 A~Z"
          />
          <meta
            property="og:image"
            content="https://lh3.googleusercontent.com/zkXM6petYck9HO6bR041dxgedHpTcZhd5MFh3VKp0M3uPZtAi__8tGD42FE6mqrOPX3DO0PFdnyrwr-J8U43w9m5tQiNglp4o3o7NW_5KvoCxQO5YGhMxBbf22Un-m8KREIPlL7a=w2400"
          />
          <meta property="og:url" content="https://www.riseenm.com" />

          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="RISE" />
          <meta
            property="twitter:title"
            content="라이즈 | 패션&코스메틱 라이브 쇼핑 MCN"
          />
          <meta
            property="twitter:description"
            content="패션&코스메틱 전문 쇼핑 호스트 + 크리에이터와 함께하는 라이브 쇼핑의 A~Z"
          />
          <meta
            property="twitter:image"
            content="https://lh3.googleusercontent.com/zkXM6petYck9HO6bR041dxgedHpTcZhd5MFh3VKp0M3uPZtAi__8tGD42FE6mqrOPX3DO0PFdnyrwr-J8U43w9m5tQiNglp4o3o7NW_5KvoCxQO5YGhMxBbf22Un-m8KREIPlL7a=w2400"
          />
          <meta property="twitter:url" content="https://www.riseenm.com" />
          <meta
            name="facebook-domain-verification"
            content="yjg5pl42821he9rt3davch7x6lp397"
          />
          <meta
            name="naver-site-verification"
            content="ceeafc0e07aeadba359eb22c54762497e3549ffd"
          />
          <meta name="theme-color" content="#222" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />

          {/* 폰트 */}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          />

          {/* css-reset */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
            integrity="sha512-NmLkDIU1C/C88wi324HBc+S2kLhi08PN5GDeUVVVC/BVt/9Izdsc9SVeVfA1UZbY3sHUlDSyRXhCzHfr6hmPPw=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
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
