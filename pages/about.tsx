import React, { useEffect } from 'react';
import AboutLayout from 'components/About/AboutLayout';
import MetaGe from 'components/Common/MetaGe';

export default function about(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <MetaGe
        title="ABOUT RISE | 라이즈 MCN"
        desc="라이브커머스를 한편의 컨텐츠 처럼 자체 스튜디오, 쇼호스트, 전문PD, 촬영장비를 통해 브랜드 컨셉에 맞춘 최적화 방송을 진행합니다."
        url="https://www.riseenm.com/about"
      />
      <AboutLayout />
    </>
  );
}
