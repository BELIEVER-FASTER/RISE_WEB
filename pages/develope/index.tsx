import React, { useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import MainLayout from 'components/Main/MainLayout';
import Head from 'next/head';

export default function main(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Layout footer={false}>
      <Head>
        <title>RISE</title>
      </Head>
      <MainLayout />
    </Layout>
  );
}
