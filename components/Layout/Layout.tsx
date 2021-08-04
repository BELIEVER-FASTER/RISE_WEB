import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { LayoutContainer } from './styles';

type LayoutProps = {
  children: React.ReactNode;
  header?: boolean;
  footer?: boolean;
};
export default function Layout({
  header = true,
  footer = true,
  children,
}: LayoutProps): JSX.Element {
  return (
    <LayoutContainer>
      {header && <Header />}
      {children}
      {footer && <Footer />}
    </LayoutContainer>
  );
}
