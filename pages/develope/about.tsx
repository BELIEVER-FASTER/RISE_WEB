import Head from 'next/head';
import React from 'react';
import AboutLayout from 'components/About2/AboutLayout';

export default function about(): JSX.Element {
  return (
    <>
      <Head>
        <title>RISE | ABOUT</title>
      </Head>
      <AboutLayout />
    </>
  );
}
