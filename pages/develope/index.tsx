import React, { useEffect } from 'react';
import MainLayout from 'components/Main/MainLayout';
import Head from 'next/head';

export default function main(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>라이즈 RISE</title>
      </Head>
      <MainLayout />
    </>
  );
}
