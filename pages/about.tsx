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
        title="RISE | ABOUT"
        desc="패션 코스메틱(뷰티) 브랜드의 컨셉을 통해 라이즈 MCN의 쇼호스트, 스튜디오,장비 를 통해 브랜드에 최적화된 방송을 진행합니다."
        url="https://www.riseenm.com/about"
      />
      <AboutLayout />
    </>
  );
}
