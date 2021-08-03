import React from 'react';
import EmailInput from './EmailInput';
import { CHeaderContainer } from './styles';

export default function CHeader(): JSX.Element {
  return (
    <CHeaderContainer>
      <div className="header__left">
        <img src="/img/Rise.svg" alt="rise" />
        <p>
          우리는 패션 & 코스메틱 라이브쇼핑을
          <br /> 디렉팅하는 Live Mcn Rise기업입니다.
        </p>
      </div>
      <div className="header__right">
        <EmailInput />
      </div>
    </CHeaderContainer>
  );
}
