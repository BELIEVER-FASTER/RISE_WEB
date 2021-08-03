import React from 'react';
import EmailInput from './EmailInput';
import { CHeaderContainer } from './styles';

export default function CHeader(): JSX.Element {
  return (
    <CHeaderContainer>
      <div className="header__left">
        <img src="/img/Rise.svg" alt="rise" />
        <p>
          <span>패션&코스메틱 라이브쇼핑 MCN</span>
          <span className="dash"> - </span>
          <span>오픈 알림 설정하고 라이브 프로모션 혜택</span>
        </p>
      </div>
      <div className="header__right">
        <EmailInput />
      </div>
    </CHeaderContainer>
  );
}
