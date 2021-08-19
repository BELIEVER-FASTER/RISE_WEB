import BannerTitle from 'components/Common/BannerTitle';
import Layout from 'components/Layout/Layout';
import WorkLayout from 'components/Work/WorkLayout';
import Head from 'next/head';
import React from 'react';

export default function work(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>RISE | WORK</title>
      </Head>
      <WorkLayout />
    </Layout>
  );
}
