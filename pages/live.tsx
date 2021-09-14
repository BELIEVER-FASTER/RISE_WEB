import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import LiveB from 'components/Live/LiveB';
import { LiveLayoutContainer } from 'components/Live/styles';
import MetaGe from 'components/Common/MetaGe';

const LiveA = dynamic(() => import('components/Live/LiveA'), { ssr: false });

export default function live2(): JSX.Element {
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
        title="라이즈 RISE | LIVE"
        desc="RISE MCN의 패션 코스메틱(뷰티) 전문 모바일 쇼호스트 , 크리에이터를 소개합니다."
        url="https://www.riseenm.com/live"
      />

      <LiveLayoutContainer>
        <LiveA />
      </LiveLayoutContainer>
      <LiveB />
    </>
  );
}
