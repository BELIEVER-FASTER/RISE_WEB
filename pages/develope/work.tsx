import BannerTitle from 'components/Common/BannerTitle';
import Layout from 'components/Layout/Layout';
import Head from 'next/head';
import React from 'react';

export default function work(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>RISE | WORK</title>
      </Head>
      <BannerTitle
        title2="Work"
        desc="패션 코스메틱 라이브 쇼핑 MCN 패션&코스메틱 전문 쇼핑 호스트 + 크리에이터와 함께하는 라이브 쇼핑의 A-Z"
      />
    </Layout>
  );
}
