import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import { LayoutContainer } from './styles';
import { Transition, TransitionGroup, TransitionStatus } from 'react-transition-group';
import { useEffect } from 'react';

const TIMEOUT = 500;

const getTransitionStyles: { [key in TransitionStatus]: React.CSSProperties } = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
  exited: {},
  unmounted: {},
};

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps): JSX.Element {
  const router = useRouter();
  const [headerEx, setHeaderEx] = useState(false);

  useEffect(() => {
    if (router.pathname === '/about') {
      setHeaderEx(true);
    } else if (router.pathname === '/contact') {
      setHeaderEx(true);
    } else if (router.pathname === '/showhost') {
      setHeaderEx(true);
    } else if (router.pathname === '/work') {
      setHeaderEx(true);
    } else if (router.pathname === '/') {
      setHeaderEx(true);
    } else if (router.asPath === '/shop/list') {
      setHeaderEx(true);
    } else if (router.asPath === '/shop/payment') {
      setHeaderEx(false);
    }
  }, [router]);
  return (
    <LayoutContainer>
      {headerEx && <Header />}
      <TransitionGroup style={{ position: 'relative' }}>
        <Transition
          key={router.pathname}
          timeout={{
            enter: TIMEOUT,
            exit: TIMEOUT,
          }}
        >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </Transition>
      </TransitionGroup>
      <Footer />
    </LayoutContainer>
  );
}
