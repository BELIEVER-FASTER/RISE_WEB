import React from 'react';
import { ContactBannerContainer } from './styles';

export default function ContactBanner(): JSX.Element {
  return (
    <ContactBannerContainer>
      <h1>
        <img src="/img/scroll_down.svg" alt="scroll_down" />
        <span>Contact Us</span>
      </h1>
      <p>
        우리는 패션 & 코스메틱 라이브쇼핑을
        <br />
        디렉팅하는 live mcn ‘rise 기업입니다.
      </p>
    </ContactBannerContainer>
  );
}
