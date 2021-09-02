import WorkLayout from 'components/Work/WorkLayout';
import Head from 'next/head';
import React, { useEffect } from 'react';

export default function work(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Head>
        <title>RISE | WORK</title>
      </Head>
      <WorkLayout />
    </>
  );
}
