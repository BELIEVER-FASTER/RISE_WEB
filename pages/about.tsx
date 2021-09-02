import React, { useEffect } from 'react';
import Head from 'next/head';
import AboutLayout from 'components/About/AboutLayout';

export default function about(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Head>
        <title>RISE | ABOUT</title>
      </Head>
      <AboutLayout />
    </>
  );
}
