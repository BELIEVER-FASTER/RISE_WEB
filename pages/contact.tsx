import Layout from 'components/Layout/Layout';
import React from 'react';
import { useEffect } from 'react';
import ContactLayout from 'components/Contact/ContactLayout';

export default function contact(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Layout>
      <ContactLayout />
    </Layout>
  );
}
