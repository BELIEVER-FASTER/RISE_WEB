import React from 'react';
import dynamic from 'next/dynamic';
import LiveB from 'components/Live/LiveB';
import Layout from '../components/Layout/Layout';
import { LiveLayoutContainer } from '../components/Live/styles';

const LiveA = dynamic(() => import('components/Live/LiveA'), { ssr: false });

export default function live2(): JSX.Element {
  return (
    <Layout>
      <LiveLayoutContainer>
        <LiveA />
      </LiveLayoutContainer>
      <LiveB />
    </Layout>
  );
}
