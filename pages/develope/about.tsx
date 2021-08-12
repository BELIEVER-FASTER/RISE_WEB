import Head from 'next/head';
import React from 'react';
import BannerTitle from 'components/Common/BannerTitle';
import Layout from 'components/Layout/Layout';

export default function about(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>RISE | ABOUT</title>
      </Head>
      <BannerTitle
        title1="Rise"
        title2="About"
        desc="패션 코스메틱 라이브 쇼핑 MCN 패션&코스메틱 전문 쇼핑 호스트 + 크리에이터와 함께하는 라이브 쇼핑의 A-Z"
      />
    </Layout>
  );
}
