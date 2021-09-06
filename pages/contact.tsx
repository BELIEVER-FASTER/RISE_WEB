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
        title="RISE | CONTACT"
        desc="RISE MCN은 라이브쇼핑을 함께 진행할 패션 코스메틱(뷰티) 브랜드와 쇼호스트/크리에이터의 지원과 문의를 기다리고 있습니다."
        url="https://www.riseenm.com/contact"
      />
      <ContactLayout />
    </>
  );
}
