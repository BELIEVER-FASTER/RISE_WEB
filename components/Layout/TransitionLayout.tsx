import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Transition, TransitionGroup, TransitionStatus } from 'react-transition-group';

const TIMEOUT = 300;

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

export default function TransitionLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const router = useRouter();
  return (
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
  );
}
