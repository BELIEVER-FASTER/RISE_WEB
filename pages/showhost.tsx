import React, { useEffect } from 'react';
import LiveB from 'components/Live/LiveB';
import { LiveLayoutContainer } from 'components/Live/styles';
import MetaGe from 'components/Common/MetaGe';

export default function showhost(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    return () => {
      const header = document.querySelectorAll('.main_header') as NodeListOf<HTMLElement>;
      header.forEach(el => {
        el.style.color = '';
        el.style.fill = '';
      });
    };
  }, []);
  return (
    <>
      <MetaGe
        title="쇼호스트 소개 | 라이즈"
        desc="트렌디한 라이브커머스 대행 라이즈의 전문적인 쇼호스트를 소개합니다."
        url="https://www.riseenm.com/live"
      />
      <LiveLayoutContainer>
        <LiveB />
      </LiveLayoutContainer>
    </>
  );
}
