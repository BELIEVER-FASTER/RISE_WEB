import React, { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
// import ContactLayout from 'components/Contact/ContactLayout';
// import Layout from 'components/Layout/Layout';

export default function contact(): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    router.replace('/');
    window.scrollTo({ top: 0 });
  }, []);
  return <></>;
  // return (
  //   <Layout>
  //     <ContactLayout />
  //   </Layout>
  // );
}
