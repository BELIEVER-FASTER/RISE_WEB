import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import LiveB from 'components/Live/LiveB';
import { LiveLayoutContainer } from 'components/Live/styles';
import Head from 'next/head';

const LiveA = dynamic(() => import('components/Live/LiveA'), { ssr: false });

export default function live2(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    return () => {
      const header = document.querySelectorAll('.main_header') as NodeListOf<HTMLElement>;
      header.forEach(el => {
        el.style.color = '';
        el.style.fill = '';
      });
    };
  }, []);
  return (
    <>
      <Head>
        <title>RISE | LIVE</title>
      </Head>
      <LiveLayoutContainer>
        <LiveA />
      </LiveLayoutContainer>
      <LiveB />
    </>
  );
}
