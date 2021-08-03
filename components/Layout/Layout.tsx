import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { LayoutContainer } from './styles';

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  );
}
