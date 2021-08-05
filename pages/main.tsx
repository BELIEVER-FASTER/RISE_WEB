import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
// import Layout from 'components/Layout/Layout';
// import MainLayout from 'components/Main/MainLayout';

export default function main(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
  }, []);
  return <></>;
  // return (
  //   <Layout footer={false}>
  //     <MainLayout />
  //   </Layout>
  // );
}
