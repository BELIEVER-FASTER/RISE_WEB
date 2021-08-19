import React from 'react';
import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import AboutLayout from 'components/About/AboutLayout';

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
