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
      window.scrollTo({ top: 0 });
    };
  }, []);
  return (
    <>
      <MetaGe
        title="쇼호스트 소개 | 라이즈"
        desc="라이브커머스 대행사인 라이즈의 전문 쇼호스트를 소개합니다."
        url="https://www.riseenm.com/live"
      />

      <LiveLayoutContainer>
        <LiveA />
      </LiveLayoutContainer>
      <LiveB />
    </>
  );
}
