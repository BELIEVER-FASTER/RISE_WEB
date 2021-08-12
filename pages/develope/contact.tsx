import React, { useEffect } from 'react';
import ContactLayout from 'components/Contact/ContactLayout';
import Layout from 'components/Layout/Layout';
import Head from 'next/head';

export default function contact(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Layout>
      <Head>
        <title>RISE | CONTACT</title>
      </Head>
      <ContactLayout />
    </Layout>
  );
}
