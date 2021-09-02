import Head from 'next/head';
import { useEffect } from 'react';
import MainLayout from 'components/Main/MainLayout';

export default function Home(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>RISE</title>
      </Head>
      <MainLayout />
    </>
  );
}
