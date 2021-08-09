import React from 'react';
import Layout from 'components/Layout/Layout';
import MainLayout from 'components/Main/MainLayout';

export default function main(): JSX.Element {
  return (
    <Layout footer={false}>
      <MainLayout />
    </Layout>
  );
}
