import React, { useEffect } from 'react';
import ContactLayout from 'components/Contact/ContactLayout';
import MetaGe from 'components/Common/MetaGe';

export default function contact(): JSX.Element {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <MetaGe
        title="라이즈 RISE | CONTACT"
        desc="네이버쇼핑라이브, 카카오쇼핑라이브, grip그립 라이브, vogo보고 라이브, cj온스타일 라이브 등 다양한 라이브커머스 플랫폼에서의 패션 코스메틱 의 라이브 방송진행을 최고의 라이브쇼핑 대행사 라이즈 MCN과 함께 진행할 수 있습니다."
        url="https://www.riseenm.com/contact"
      />
      <ContactLayout />
    </>
  );
}
