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
        title="라이즈 RISE | ABOUT"
        desc="패션(의류), 코스메틱(화장품) 브랜드의 컨셉을 매칭하여 라이즈 MCN의 쇼호스트, 스튜디오,장비를 통해 각 브랜드에 맞춤화된 라이브쇼핑을 진행하여 최고의 패션,뷰티 마케팅을 경험할 수 있습니다. "
        url="https://www.riseenm.com/about"
      />
      <AboutLayout />
    </>
  );
}
