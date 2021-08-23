import WorkLayout from 'components/Work/WorkLayout';
import Head from 'next/head';
import React from 'react';

export default function work(): JSX.Element {
  return (
    <>
      <Head>
        <title>RISE | WORK</title>
      </Head>
      <WorkLayout />
    </>
  );
}
