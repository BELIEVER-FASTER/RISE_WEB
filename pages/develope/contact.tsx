import React, { useEffect } from 'react';
import ContactLayout from 'components/Contact/ContactLayout';
import Head from 'next/head';

export default function contact(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>RISE | CONTACT</title>
      </Head>
      <ContactLayout />
    </>
  );
}
