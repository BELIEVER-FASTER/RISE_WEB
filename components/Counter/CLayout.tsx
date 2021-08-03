import React from 'react';
import CHeader from './CHeader';
import Counter from './Couter';
import Social from './Social';
import { CLayoutContainer } from './styles';

export default function CLayout(): JSX.Element {
  return (
    <CLayoutContainer>
      <video loop autoPlay muted>
        <source src="/video/counter_main.mp4" type="video/mp4" />
      </video>
      <div className="counter_page__content">
        <CHeader />
        <div className="bottom__content">
          <Counter />
          <div className="social__list">
            <Social type="Facebook" link="https://developers.facebook.com/" />
            <Social type="Instagram" link="https://www.instagram.com/?hl=ko" />
          </div>
        </div>
      </div>
    </CLayoutContainer>
  );
}
