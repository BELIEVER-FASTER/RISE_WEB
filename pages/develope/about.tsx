import Head from 'next/head';
import React from 'react';
import Layout from 'components/Layout/Layout';
import AboutLayout from 'components/About2/AboutLayout';

export default function about(): JSX.Element {
  return (
    <Layout>
      <Head>
        <title>RISE | ABOUT</title>
      </Head>
      <AboutLayout />
    </Layout>
  );
}
